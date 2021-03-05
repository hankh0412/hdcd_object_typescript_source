import {PAINTER as pntr} from "../app/painter_constants";
import {PAINTER as pntr2} from "../model/painter_model";
//Change_Start_DEL
/*
import {PAINTER as pntr3} from "../model/piece/ellipse_piece";
*/
//Change_End

//Change_Start
import {PAINTER as pntr4} from "../controller/painter_controller";
//Change_End

export namespace PAINTER.view {

	import PainterConstants = pntr.app.PainterConstants;
	import PainterModel = pntr2.model.PainterModel;
	//Change_Start_DEL
	/*
	import EllipsePiece = pntr3.model.piece.EllipsePiece;
	*/
	//Change_End

	//Change_Start
	import PainterController = pntr4.controller.PainterController;
	//Change_End
	
	export class PainterView {

		private ctx: any;

		private painterModel: PainterModel;

		private canvas: any;

		//Change_Start_DEL
		/*
		private pieceType = PainterConstants.LINE;
		
		private startX = 0;
		private startY = 0;

		private endX = 0;
		private endY = 0;

		private points: any[] = [];
		*/
		//Change_End

		//Change_Start
		private painterController: PainterController;
		//Change_End
		
		//Change_Start
		private canvasImageData: any;
		//Change_End
		
		constructor() {
			let canvas: any = document.getElementById("mycanvas");
			canvas.width = PainterConstants.PAINTER_WIDTH;
			canvas.height = PainterConstants.PAINTER_HEIGHT;
			
			canvas.style.border = "1px solid gray";
			canvas.style.cursor = "pointer";

			this.canvas = canvas;
			
			let ctx = canvas.getContext("2d");

		    ctx.lineWidth = 10;
			ctx.strokeStyle = "red";
			ctx.fillStyle = "blue";
			
			this.ctx = ctx;

			//Change_Start_DEL
			/*
			this.painterModel = new PainterModel();
			*/
			//Change_End

			canvas.addEventListener("mousedown", this.handleMouseEvent.bind(this), false);
		}

		repaint(): void {
			this.painterModel.drawPieces(this.ctx);
		}

		handleMouseEvent(e: any): void {
			let canvas = this.canvas;
			let painterViewThis = this;

			//Change_Start
			let painterController = this.painterController;
			//Change_End

			//Change_Start_DEL
			/*
			let canvasImageData = this.ctx.getImageData(0, 0, canvas.width, canvas.height);
			*/
			//Change_End

			//Change_Start
			this.saveImageData();
			//Change_End
			
			let pressPoint = this.relativePosition(e, canvas);

			//Change_Start
			painterController.controlPress(pressPoint.x, pressPoint.y);
			//Change_End
			
			//Change_Start_DEL
			/*
			painterViewThis.startX = pressPoint.x;
			painterViewThis.startY = pressPoint.y;

			this.points = [];
			*/
			//Change_End
			
			let mousemoveEventListener = function(e: any) {
				let movePoint = painterViewThis.relativePosition(e, painterViewThis.canvas);

				//Change_Start_DEL
				/*
				painterViewThis.endX = movePoint.x;
				painterViewThis.endY = movePoint.y;

				painterViewThis.points.push(movePoint);
				
				painterViewThis.ctx.putImageData(canvasImageData, 0, 0);
				
				painterViewThis.drawing(painterViewThis.ctx);
				*/
				//Change_End

				//Change_Start
				painterController.controlDrag(movePoint.x, movePoint.y);
				//Change_End
		 	};
		 	
		 	document.addEventListener("mousemove", mousemoveEventListener, false);
		 	
		 	let mouseupEventListener = function(e: any) {
		 		let upPoint = painterViewThis.relativePosition(e, canvas);
				 
				//Change_Start_DEL
				/*
				painterViewThis.endX = upPoint.x;
				painterViewThis.endY = upPoint.y;

				painterViewThis.points.push(upPoint);
				
				painterViewThis.ctx.putImageData(canvasImageData, 0, 0);
				
				painterViewThis.drawing(painterViewThis.ctx);
				*/
				//Change_End

				//Change_Start
				painterController.controlRelease(upPoint.x, upPoint.y);
				//Change_End
				
		 		document.removeEventListener("mousemove", mousemoveEventListener, false);
		 		document.removeEventListener("mouseup", mouseupEventListener, false);
			};
		 	
		 	document.addEventListener("mouseup", mouseupEventListener, false);
		}
		
		relativePosition(event: any, element: any): any {
			let rect = element.getBoundingClientRect();
			return { x: Math.floor(event.clientX - rect.left),
					 y: Math.floor(event.clientY - rect.top ) };
		}

		//Change_Start_DEL
		/*
		setPieceType(pieceType: symbol): void {
			this.pieceType = pieceType;
		}
		*/
		//Change_End
		
		//Change_Start_DEL
		/*
		drawing(ctx: any): void {
			if(this.pieceType === PainterConstants.LINE) {
				ctx.beginPath();
				ctx.moveTo(this.startX, this.startY);
				ctx.lineTo(this.endX, this.endY);
				ctx.stroke();
			}
			else if(this.pieceType === PainterConstants.RECTANGLE) {
				var w = this.endX - this.startX;
				var h = this.endY - this.startY;
				
				ctx.fillRect(this.startX, this.startY, w, h);
				
				ctx.strokeRect(this.startX, this.startY, w, h);
			}
			else if(this.pieceType === PainterConstants.ELLIPSE) {
				let w = this.endX - this.startX;
				let h = this.endY - this.startY;
				
				EllipsePiece.drawEllipseByBezierCurve(ctx, this.startX, this.startY, w, h);
			}
			else if(this.pieceType === PainterConstants.FREE_PATH) {
				ctx.beginPath();
				ctx.moveTo(this.startX, this.startY);
				
				for(let i = 0; i < this.points.length; i++) {
					ctx.lineTo(this.points[i].x, this.points[i].y);
				}
				
				ctx.stroke();
			}
		}
		*/
		//Change_End

		//Change_Start
		drawing() {
			this.ctx.putImageData(this.canvasImageData, 0, 0);
			
			if(this.painterController !== null) {
				if (this.painterController.isValidDrawing()) {
					this.painterController.drawing(this.ctx);
				}
			}
		}
		//Change_End
		
		//Change_Start
		saveImageData() {
			this.canvasImageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
		}
		//Change_End
		
		//Change_Start
		setPainterModel(painterModel: PainterModel) {
			this.painterModel = painterModel;
		}
		//Change_End

		//Change_Start
		setPainterController(painterController: PainterController) {
			this.painterController = painterController;
		}
		//Change_End

		toString(): string {
		    return "PainterView";
		}
		
	}

}

import {PAINTER as pntr} from "../app/painter_constants";
import {PAINTER as pntr2} from "../model/painter_model";
import {PAINTER as pntr3} from "../model/piece/ellipse_piece";

export namespace PAINTER.view {

	import PainterConstants = pntr.app.PainterConstants;
	import PainterModel = pntr2.model.PainterModel;
	import EllipsePiece = pntr3.model.piece.EllipsePiece;
	
	export class PainterView {

		private ctx: any;

		private painterModel: PainterModel;

		private canvas: any;

		private pieceType = PainterConstants.LINE;
		
		private startX = 0;
		private startY = 0;

		private endX = 0;
		private endY = 0;

		//Change_Start
		private points: any[] = [];
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

			this.painterModel = new PainterModel();

			canvas.addEventListener("mousedown", this.handleMouseEvent.bind(this), false);
		}

		repaint(): void {
			this.painterModel.drawPieces(this.ctx);
		}

		handleMouseEvent(e: any): void {
			let canvas = this.canvas;
			let painterViewThis = this;

			let canvasImageData = this.ctx.getImageData(0, 0, canvas.width, canvas.height);
			
			let pressPoint = this.relativePosition(e, canvas);
			
			painterViewThis.startX = pressPoint.x;
			painterViewThis.startY = pressPoint.y;

			//Change_Start
			this.points = [];
			//Change_End
			
			let mousemoveEventListener = function(e: any) {
				let movePoint = painterViewThis.relativePosition(e, painterViewThis.canvas);
				
				painterViewThis.endX = movePoint.x;
				painterViewThis.endY = movePoint.y;

				//Change_Start
				painterViewThis.points.push(movePoint);
				//Change_End
				
				painterViewThis.ctx.putImageData(canvasImageData, 0, 0);
				
				painterViewThis.drawing(painterViewThis.ctx);
		 	};
		 	
		 	document.addEventListener("mousemove", mousemoveEventListener, false);
		 	
		 	let mouseupEventListener = function(e: any) {
		 		let upPoint = painterViewThis.relativePosition(e, canvas);
		 		
				painterViewThis.endX = upPoint.x;
				painterViewThis.endY = upPoint.y;

				//Change_Start
				painterViewThis.points.push(upPoint);
				//Change_End
				
				painterViewThis.ctx.putImageData(canvasImageData, 0, 0);
				
				painterViewThis.drawing(painterViewThis.ctx);
				
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

		setPieceType(pieceType: symbol): void {
			this.pieceType = pieceType;
		}
		
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
			//Change_Start
			else if(this.pieceType === PainterConstants.FREE_PATH) {
				ctx.beginPath();
				ctx.moveTo(this.startX, this.startY);
				
				for(let i = 0; i < this.points.length; i++) {
					ctx.lineTo(this.points[i].x, this.points[i].y);
				}
				
				ctx.stroke();
			}
			//Change_End
		}

		toString(): string {
		    return "PainterView";
		}
		
	}

}

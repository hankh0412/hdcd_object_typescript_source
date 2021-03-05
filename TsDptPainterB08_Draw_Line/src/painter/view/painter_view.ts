import {PAINTER as pntr} from "../app/painter_constants";
import {PAINTER as pntr2} from "../model/painter_model";

export namespace PAINTER.view {

	import PainterConstants = pntr.app.PainterConstants;
	import PainterModel = pntr2.model.PainterModel;
	
	export class PainterView {

		private ctx: any;

		private painterModel: PainterModel;

		private canvas: any;

		//Change_Start
		private pieceType = PainterConstants.LINE;
		//Change_End

		//Change_Start
		private startX = 0;
		private startY = 0;

		private endX = 0;
		private endY = 0;
		//Change_End
		
		constructor() {
			let canvas: any = document.getElementById("mycanvas");
			canvas.width = PainterConstants.PAINTER_WIDTH;
			canvas.height = PainterConstants.PAINTER_HEIGHT;
			
			canvas.style.border = "1px solid gray";
			canvas.style.cursor = "pointer";

			this.canvas = canvas;
			
			let ctx = canvas.getContext("2d");

			//Change_Start
		    ctx.lineWidth = 10;
			ctx.strokeStyle = "red";
			ctx.fillStyle = "blue";
			//Change_End
		
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

			//Change_Start
			let canvasImageData = this.ctx.getImageData(0, 0, canvas.width, canvas.height);
			//Change_End
			
			let pressPoint = this.relativePosition(e, canvas);
			//Change_Start_DEL
			/*
			console.log("mousedown p.x = " + pressPoint.x + " p.y = " + pressPoint.y);
			*/
			//Change_End

			//Change_Start
			painterViewThis.startX = pressPoint.x;
			painterViewThis.startY = pressPoint.y;
			//Change_End
			
			let mousemoveEventListener = function(e: any) {
				let movePoint = painterViewThis.relativePosition(e, painterViewThis.canvas);
				//Change_Start_DEL
				/*
				console.log("mousemove p.x = " + movePoint.x + " p.y = " + movePoint.y);
				*/
				//Change_End

				//Change_Start
				painterViewThis.endX = movePoint.x;
				painterViewThis.endY = movePoint.y;
				//Change_End
				
				//Change_Start
				painterViewThis.ctx.putImageData(canvasImageData, 0, 0);
				//Change_End
				
				//Change_Start
				painterViewThis.drawing(painterViewThis.ctx);
				//Change_End
		 	};
		 	
		 	document.addEventListener("mousemove", mousemoveEventListener, false);
		 	
		 	let mouseupEventListener = function(e: any) {
		 		let upPoint = painterViewThis.relativePosition(e, canvas);
				//Change_Start_DEL
				/*
				console.log("mouseup p.x = " + upPoint.x + " p.y = " + upPoint.y);
				*/
				//Change_End

				//Change_Start
				painterViewThis.endX = upPoint.x;
				painterViewThis.endY = upPoint.y;
				//Change_End
				
				//Change_Start
				painterViewThis.ctx.putImageData(canvasImageData, 0, 0);
				//Change_End
				
				//Change_Start
				painterViewThis.drawing(painterViewThis.ctx);
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

		//Change_Start
		setPieceType(pieceType: symbol): void {
			this.pieceType = pieceType;
		}
		//Change_End
		
		//Change_Start
		drawing(ctx: any): void {
			if(this.pieceType === PainterConstants.LINE) {
				ctx.beginPath();
				ctx.moveTo(this.startX, this.startY);
				ctx.lineTo(this.endX, this.endY);
				ctx.stroke();
			}
		}
		//Change_End
		
		toString(): string {
		    return "PainterView";
		}
		
	}

}

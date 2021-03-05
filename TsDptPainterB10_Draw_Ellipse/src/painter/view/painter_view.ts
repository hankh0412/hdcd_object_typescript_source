import {PAINTER as pntr} from "../app/painter_constants";
import {PAINTER as pntr2} from "../model/painter_model";

export namespace PAINTER.view {

	import PainterConstants = pntr.app.PainterConstants;
	import PainterModel = pntr2.model.PainterModel;
	
	export class PainterView {

		private ctx: any;

		private painterModel: PainterModel;

		private canvas: any;

		private pieceType = PainterConstants.LINE;
		
		private startX = 0;
		private startY = 0;

		private endX = 0;
		private endY = 0;
		
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
			
			let mousemoveEventListener = function(e: any) {
				let movePoint = painterViewThis.relativePosition(e, painterViewThis.canvas);
				
				painterViewThis.endX = movePoint.x;
				painterViewThis.endY = movePoint.y;
				
				painterViewThis.ctx.putImageData(canvasImageData, 0, 0);
				
				painterViewThis.drawing(painterViewThis.ctx);
		 	};
		 	
		 	document.addEventListener("mousemove", mousemoveEventListener, false);
		 	
		 	let mouseupEventListener = function(e: any) {
		 		let upPoint = painterViewThis.relativePosition(e, canvas);
		 		
				painterViewThis.endX = upPoint.x;
				painterViewThis.endY = upPoint.y;
				
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
			//Change_Start
			else if(this.pieceType === PainterConstants.ELLIPSE) {
				let w = this.endX - this.startX;
				let h = this.endY - this.startY;
				
				this.drawEllipseByBezierCurve(ctx, this.startX, this.startY, w, h);
			}
			//Change_End
		}

		//Change_Start
		drawEllipseByBezierCurve(ctx: any, x: number, y: number, w: number, h: number): void {
			let kappa = .5522848,
		      ox = (w / 2) * kappa,
		      oy = (h / 2) * kappa,
		      xe = x + w,
		      ye = y + h,
		      xm = x + w / 2,
		      ym = y + h / 2;

			ctx.beginPath();
			ctx.moveTo(x, ym);
			ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
			ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
			ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
			ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
			  
			ctx.fill();
			  
			ctx.stroke();
		}
		//Change_End
		
		toString(): string {
		    return "PainterView";
		}
		
	}

}

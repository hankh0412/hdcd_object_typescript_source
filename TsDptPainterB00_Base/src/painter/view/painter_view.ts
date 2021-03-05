import {PAINTER as pntr} from "../app/painter_constants";

export namespace PAINTER.view {

	import PainterConstants = pntr.app.PainterConstants;

	export class PainterView {

		private ctx: any;
		
		constructor() {
			let canvas: any = document.getElementById("mycanvas");
			canvas.width = PainterConstants.PAINTER_WIDTH;
			canvas.height = PainterConstants.PAINTER_HEIGHT;
			
			canvas.style.border = "1px solid gray";
			canvas.style.cursor = "pointer";
			
			let ctx = canvas.getContext("2d");
		
		    ctx.lineWidth = 10;
			ctx.strokeStyle = "red";
			ctx.fillStyle = "blue";
			
			this.ctx = ctx;
		}
		
		repaint(): void {
			let x = 10;
			let y = 20;
			let w = 100;
			let h = 50;

			this.ctx.fillRect(x, y, w, h);
			
			this.ctx.strokeRect(x, y, w, h);
		}
		
		toString(): string {
		    return "PainterView";
		}
		
	}

}

import {PAINTER as pntr} from "../app/painter_constants";
import {PAINTER as pntr2} from "../model/painter_model";
import {PAINTER as pntr3} from "../model/piece/line_piece";
import {PAINTER as pntr4} from "../model/piece/rectangle_piece";

export namespace PAINTER.view {

	import PainterConstants = pntr.app.PainterConstants;
	import PainterModel = pntr2.model.PainterModel;
	import LinePiece = pntr3.model.piece.LinePiece;
	
	//Change_Start
	import RectanglePiece = pntr4.model.piece.RectanglePiece;
	//Change_End
	
	export class PainterView {

		private ctx: any;

		private painterModel: PainterModel;
		
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

			this.painterModel = new PainterModel();
			this.painterModel.addPiece(new LinePiece(50, 50, 100, 80));

			//Change_Start
			this.painterModel.addPiece(new RectanglePiece(110, 20, 100, 50));
			//Change_End
		}
		
		repaint(): void {
			this.painterModel.drawPieces(this.ctx);
		}
		
		toString(): string {
		    return "PainterView";
		}
		
	}

}

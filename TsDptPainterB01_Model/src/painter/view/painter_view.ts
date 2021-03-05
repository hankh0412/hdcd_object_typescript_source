import {PAINTER as pntr} from "../app/painter_constants";
import {PAINTER as pntr2} from "../model/painter_model";
import {PAINTER as pntr3} from "../model/piece/line_piece";

export namespace PAINTER.view {

	import PainterConstants = pntr.app.PainterConstants;

	//Change_Start
	import PainterModel = pntr2.model.PainterModel;
	import LinePiece = pntr3.model.piece.LinePiece;
	//Change_End

	export class PainterView {

		private ctx: any;

		//Change_Start
		private painterModel: PainterModel;
		//Change_End
		
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

			//Change_Start
			this.painterModel = new PainterModel();
			//Change_End
			
			//Change_Start
			this.painterModel.addPiece(new LinePiece(50, 50, 100, 80));
			//Change_End
		}
		
		repaint(): void {
			
			//Change_Start
			this.painterModel.drawPieces(this.ctx);
			//Change_End

			//Change_Start_DEL
			/*
			let x = 10;
			let y = 20;
			let w = 100;
			let h = 50;

			this.ctx.fillRect(x, y, w, h);
			
			this.ctx.strokeRect(x, y, w, h);
			*/
			//Change_End
		}
		
		toString(): string {
		    return "PainterView";
		}
		
	}

}

import {PAINTER as pntr} from "./piece/line_piece";
import {PAINTER as pntr2} from "./piece/rectangle_piece";
import {PAINTER as pntr3} from "./piece/ellipse_piece";

export namespace PAINTER.model {

	import LinePiece = pntr.model.piece.LinePiece;
	import RectanglePiece = pntr2.model.piece.RectanglePiece;

	//Change_Start
	import EllipsePiece = pntr3.model.piece.EllipsePiece;
	//Change_End

	export class PainterModel {

		private pieces: any[];
		
		constructor() {
		    this.pieces = [];
		}
		
		drawPieces(ctx: any): void {
			let size = this.pieces.length;
	
			for (let i = 0; i < size; i++) {
				if(this.pieces[i] instanceof LinePiece) {
					this.pieces[i].drawLine(ctx);
				}
				else if(this.pieces[i] instanceof RectanglePiece) {
					this.pieces[i].drawRect(ctx);
				}
				//Change_Start
				else if(this.pieces[i] instanceof EllipsePiece) {
					this.pieces[i].drawEllipse(ctx);
				}
				//Change_End
			}
		}
		
		addPiece(piece: any): void {
			this.pieces.push(piece);
		}
		
		toString(): string {
		    return "PainterModel";
		}
		
	}

}

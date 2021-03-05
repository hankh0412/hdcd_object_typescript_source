import {PAINTER as pntr} from "./piece/abstract_piece";

export namespace PAINTER.model {

	//Change_Start_DEL
	/*
	import LinePiece = pntr.model.piece.LinePiece;
	import RectanglePiece = pntr2.model.piece.RectanglePiece;
	import EllipsePiece = pntr3.model.piece.EllipsePiece;
	*/
	//Change_End

	//Change_Start
	import AbstractPiece = pntr.model.piece.AbstractPiece;
	//Change_End

	export class PainterModel {

		//Change_Start
		private pieces: AbstractPiece[];
		//Change_End
		
		constructor() {
		    this.pieces = [];
		}
		
		drawPieces(ctx: any): void {
			let size = this.pieces.length;
	
			//Change_Start_DEL
			/*
			for (let i = 0; i < size; i++) {
				if(this.pieces[i] instanceof LinePiece) {
					this.pieces[i].drawLine(ctx);
				}
				else if(this.pieces[i] instanceof RectanglePiece) {
					this.pieces[i].drawRect(ctx);
				}
				else if(this.pieces[i] instanceof EllipsePiece) {
					this.pieces[i].drawEllipse(ctx);
				}
			}
			*/
			//Change_End

			//Change_Start
			for (let i = 0; i < size; i++) {
				this.pieces[i].draw(ctx);
			}
			//Change_End
		}
		
		//Change_Start
		addPiece(piece: AbstractPiece): void {
		//Change_End
			this.pieces.push(piece);
		}
		
		toString(): string {
		    return "PainterModel";
		}
		
	}

}

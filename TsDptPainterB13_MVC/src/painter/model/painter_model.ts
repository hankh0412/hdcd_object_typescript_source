import {PAINTER as pntr} from "./piece/abstract_piece";
import {PAINTER as pntr2} from "../app/painter_constants";

export namespace PAINTER.model {

	import AbstractPiece = pntr.model.piece.AbstractPiece;
	//Change_Start
	import PainterConstants = pntr2.app.PainterConstants;
	//Change_End
	
	export class PainterModel {

		private pieces: AbstractPiece[];

		//Change_Start
		private pieceType = PainterConstants.LINE;
		//Change_End
		
		constructor() {
		    this.pieces = [];
		}
		
		drawPieces(ctx: any): void {
			let size = this.pieces.length;
	
			for (let i = 0; i < size; i++) {
				this.pieces[i].draw(ctx);
			}
		}
		
		addPiece(piece: AbstractPiece): void {
			this.pieces.push(piece);
		}

		//Change_Start
		getPieceType(): symbol {
			return this.pieceType;
		}
		
		setPieceType(pieceType: symbol): void {
			this.pieceType = pieceType;
		}
		//Change_End
		
		//Change_Start
		getPieces(): AbstractPiece[] {
			return this.pieces;
		}
		//Change_End
		
		toString(): string {
		    return "PainterModel";
		}
		
	}

}

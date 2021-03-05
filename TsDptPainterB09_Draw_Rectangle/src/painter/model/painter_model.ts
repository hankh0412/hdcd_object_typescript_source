import {PAINTER as pntr} from "./piece/abstract_piece";

export namespace PAINTER.model {

	import AbstractPiece = pntr.model.piece.AbstractPiece;
	
	export class PainterModel {

		private pieces: AbstractPiece[];
		
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
		
		toString(): string {
		    return "PainterModel";
		}
		
	}

}

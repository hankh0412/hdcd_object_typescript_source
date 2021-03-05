export namespace PAINTER.model {

	export class PainterModel {

		private pieces: any[];
		
		constructor() {
		    this.pieces = [];
		}
		
		drawPieces(ctx: any): void {
			let size = this.pieces.length;
	
			for (let i = 0; i < size; i++) {
				this.pieces[i].drawLine(ctx);
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

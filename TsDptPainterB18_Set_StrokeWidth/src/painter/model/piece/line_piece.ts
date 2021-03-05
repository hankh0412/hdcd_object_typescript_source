import {PAINTER as pntr} from "./abstract_piece";

export namespace PAINTER.model.piece {

	import AbstractPiece = pntr.model.piece.AbstractPiece;

	export class LinePiece extends AbstractPiece {
	
		private startX: number;
		private startY: number;
		private endX: number;
		private endY: number;
		
		constructor(startX: number, startY: number, endX: number, endY: number) {
			super();
			
			this.startX = startX;
			this.startY = startY;
			this.endX = endX;
			this.endY = endY;
		}
		
		draw(ctx: any): void {
			this.applyStyle(ctx);
			
			ctx.beginPath();
			ctx.moveTo(this.startX, this.startY);
			ctx.lineTo(this.endX, this.endY);
			ctx.stroke();
		}
		
		toString(): string {
		    return "LinePiece";
		}
		
	}

}

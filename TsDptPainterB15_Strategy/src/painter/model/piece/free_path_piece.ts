import {PAINTER as pntr} from "./abstract_piece";

export namespace PAINTER.model.piece {

	import AbstractPiece = pntr.model.piece.AbstractPiece;

	export class FreePathPiece extends AbstractPiece {

		private points: any[];
		
		constructor(points: any[]) {
			super();
			
			this.points = [];
			
			for (let i = 0; i < points.length; i++) {
				this.points.push({x: points[i].x, y: points[i].y});
			}
		}
	
		draw(ctx: any): void {
			this.applyStyle(ctx);
			
			ctx.beginPath();
			ctx.moveTo(this.points[0].x, this.points[0].y);
			
			for(let i = 1; i < this.points.length; i++) {
				ctx.lineTo(this.points[i].x, this.points[i].y);
			}
			
			ctx.stroke();
		}
		
		toString(): string {
		    return "FreePathPiece";
		}
		
	}

}

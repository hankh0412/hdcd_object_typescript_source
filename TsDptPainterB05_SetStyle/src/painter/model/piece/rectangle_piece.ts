import {PAINTER as pntr} from "./abstract_piece";

export namespace PAINTER.model.piece {

	import AbstractPiece = pntr.model.piece.AbstractPiece;
	
	export class RectanglePiece extends AbstractPiece {
	
		private x: number;
		private y: number;
		private width: number;
		private height: number;
		
		constructor(x: number, y: number, width: number, height: number) {
			super();
			
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
		}
	
		draw(ctx: any): void {
			//Change_Start_DEL
			/*
		    ctx.lineWidth = this.strokeWidth;
			ctx.strokeStyle = this.strokeColor;
			ctx.fillStyle = this.fillColor;
			*/
			//Change_End

			//Change_Start
			this.applyStyle(ctx);
			//Change_End
			
			ctx.fillRect(this.x, this.y, this.width, this.height);
			
			ctx.strokeRect(this.x, this.y, this.width, this.height);
		}
		
		toString(): string {
		    return "RectanglePiece";
		}
		
	}

}

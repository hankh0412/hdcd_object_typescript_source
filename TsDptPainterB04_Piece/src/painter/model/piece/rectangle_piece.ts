import {PAINTER as pntr} from "./abstract_piece";

export namespace PAINTER.model.piece {

	//Change_Start
	import AbstractPiece = pntr.model.piece.AbstractPiece;
	//Change_End

	//Change_Start
	export class RectanglePiece extends AbstractPiece {
	//Change_End

		//Change_Start_DEL
		/*
		private strokeColor: string;
		private strokeWidth: number;

		private fillColor: string;
		*/
		//Change_End

		private x: number;
		private y: number;
		private width: number;
		private height: number;
		
		constructor(x: number, y: number, width: number, height: number) {
			//Change_Start_DEL
			/*
			this.strokeColor = "red";
			this.strokeWidth = 10;
	
			this.fillColor = "blue";
			*/
			//Change_End

			//Change_Start
			super();
			//Change_End
			
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
		}
	
		//Change_Start_DEL
		/*
		drawRect(ctx: any): void {
		    ctx.lineWidth = this.strokeWidth;
			ctx.strokeStyle = this.strokeColor;
			ctx.fillStyle = this.fillColor;
			
			ctx.fillRect(this.x, this.y, this.width, this.height);
			
			ctx.strokeRect(this.x, this.y, this.width, this.height);
		}
		*/
		//Change_End

		//Change_Start
		draw(ctx: any) {
		    ctx.lineWidth = this.strokeWidth;
			ctx.strokeStyle = this.strokeColor;
			ctx.fillStyle = this.fillColor;
			
			ctx.fillRect(this.x, this.y, this.width, this.height);
			
			ctx.strokeRect(this.x, this.y, this.width, this.height);
		}
		//Change_End
		
		toString(): string {
		    return "RectanglePiece";
		}
		
	}

}

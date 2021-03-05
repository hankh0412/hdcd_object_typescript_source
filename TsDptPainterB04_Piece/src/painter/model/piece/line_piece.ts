import {PAINTER as pntr} from "./abstract_piece";

export namespace PAINTER.model.piece {

	//Change_Start
	import AbstractPiece = pntr.model.piece.AbstractPiece;
	//Change_End

	//Change_Start
	export class LinePiece extends AbstractPiece {
	//Change_End

		//Change_Start_DEL
		/*
		private strokeColor: string;
		private strokeWidth: number;
		*/
		//Change_End

		private startX: number;
		private startY: number;
		private endX: number;
		private endY: number;
		
		constructor(startX: number, startY: number, endX: number, endY: number) {
			//Change_Start_DEL
			/*
			this.strokeColor = "green";
			this.strokeWidth = 10;
			*/
			//Change_End

			//Change_Start
			super();
			//Change_End
	
			this.startX = startX;
			this.startY = startY;
			this.endX = endX;
			this.endY = endY;
		}
		
		//Change_Start_DEL
		/*
		drawLine(ctx: any) {
		    ctx.lineWidth = this.strokeWidth;
			ctx.strokeStyle = this.strokeColor;
			
			ctx.beginPath();
			ctx.moveTo(this.startX, this.startY);
			ctx.lineTo(this.endX, this.endY);
			ctx.stroke();
		}
		*/
		//Change_End

		//Change_Start
		draw(ctx: any) {
		    ctx.lineWidth = this.strokeWidth;
			ctx.strokeStyle = this.strokeColor;
			
			ctx.beginPath();
			ctx.moveTo(this.startX, this.startY);
			ctx.lineTo(this.endX, this.endY);
			ctx.stroke();
		}
		//Change_End
		
		toString(): string {
		    return "LinePiece";
		}
		
	}

}

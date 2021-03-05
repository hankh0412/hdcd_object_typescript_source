import {PAINTER as pntr} from "./abstract_piece_manager";
import {PAINTER as pntr2} from "../../model/piece/abstract_piece";
import {PAINTER as pntr3} from "../../model/piece/line_piece";

export namespace PAINTER.controller.manager {

	import AbstractPieceManager = pntr.controller.manager.AbstractPieceManager;
	import AbstractPiece = pntr2.model.piece.AbstractPiece;
	import LinePiece = pntr3.model.piece.LinePiece;
	
	export class LinePieceManager extends AbstractPieceManager{

		private startX: number = 0;
		private startY: number = 0;

		private endX: number = 0;
		private endY: number = 0;
		
		constructor() {
			super();
		}
	
		setStartXY(startX: number, startY: number): void {
			this.startX = startX;
			this.startY = startY;
		}
		
		setEndXY(endX: number, endY: number): void {
			this.endX = endX;
			this.endY = endY;
		}
		
		isValid(): boolean {
			return this.startX !== this.endX || this.startY !== this.endY;
		}
		
		createPiece(): AbstractPiece {
			return new LinePiece(this.startX, this.startY, this.endX, this.endY);
		}
		
		drawing(ctx: any): void {
			ctx.beginPath();
			ctx.moveTo(this.startX, this.startY);
			ctx.lineTo(this.endX, this.endY);
			ctx.stroke();
		}
		
		reset(): void {
			this.startX = 0;
			this.startY = 0;
	
			this.endX = 0;
			this.endY = 0;
		}
		
		toString(): string {
		    return "LinePieceManager";
		}
		
	}

}

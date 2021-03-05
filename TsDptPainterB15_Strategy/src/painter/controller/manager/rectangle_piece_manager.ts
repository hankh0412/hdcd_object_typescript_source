import {PAINTER as pntr} from "./abstract_bounding_piece_manager";
import {PAINTER as pntr2} from "../../model/piece/abstract_piece";
import {PAINTER as pntr3} from "../../model/piece/rectangle_piece";

export namespace PAINTER.controller.manager {

	import AbstractBoundingPieceManager = pntr.controller.manager.AbstractBoundingPieceManager;
	import AbstractPiece = pntr2.model.piece.AbstractPiece;
	import RectanglePiece = pntr3.model.piece.RectanglePiece;
	
	export class RectanglePieceManager extends AbstractBoundingPieceManager{
		
		constructor() {
			super();
		}
	
		drawing(ctx: any): void {
			let w = this.endX - this.startX;
			let h = this.endY - this.startY;
			
			ctx.fillRect(this.startX, this.startY, w, h);
			
			ctx.strokeRect(this.startX, this.startY, w, h);
		}
		
		createPiece(): AbstractPiece {
			return new RectanglePiece(this.startX, this.startY, this.endX - this.startX, this.endY - this.startY);
		}
		
		toString(): string {
		    return "RectanglePieceManager";
		}
		
	}

}

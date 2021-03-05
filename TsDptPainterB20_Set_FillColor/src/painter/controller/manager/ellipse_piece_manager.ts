import {PAINTER as pntr} from "./abstract_bounding_piece_manager";
import {PAINTER as pntr2} from "../../model/piece/abstract_piece";
import {PAINTER as pntr3} from "../../model/piece/ellipse_piece";

export namespace PAINTER.controller.manager {

	import AbstractBoundingPieceManager = pntr.controller.manager.AbstractBoundingPieceManager;
	import AbstractPiece = pntr2.model.piece.AbstractPiece;
	import EllipsePiece = pntr3.model.piece.EllipsePiece;
	
	export class EllipsePieceManager extends AbstractBoundingPieceManager{
		
		constructor() {
			super();
		}
	
		drawing(ctx: any): void {
			let w = this.endX - this.startX;
			let h = this.endY - this.startY;
			
			EllipsePiece.drawEllipseByBezierCurve(ctx, this.startX, this.startY, w, h);
		}
		
		createPiece(): AbstractPiece {
			return new EllipsePiece(this.startX, this.startY, this.endX - this.startX, this.endY - this.startY);
		}
		
		toString(): string {
		    return "EllipsePieceManager";
		}
		
	}

}

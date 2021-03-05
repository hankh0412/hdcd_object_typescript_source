import {PAINTER as pntr} from "./istate";
import {PAINTER as pntr2} from "../manager/abstract_piece_manager";
import {PAINTER as pntr3} from "./icontext";

export namespace PAINTER.controller.state {

	import IState = pntr.controller.state.IState;
	import AbstractPieceManager = pntr2.controller.manager.AbstractPieceManager;
	import IContext = pntr3.controller.state.IContext;

	export abstract class ImplState implements IState {

		private pieceManager: AbstractPieceManager;
		
		constructor() {
			this.pieceManager = this.createPieceManager();
		}
		
		abstract createPieceManager(): AbstractPieceManager;
		
		press(context: IContext, mouseX: number, mouseY: number): void {
			this.pieceManager.setStartXY(mouseX, mouseY);
		}
		
		drag(context: IContext, mouseX: number, mouseY: number): void {
			this.pieceManager.setEndXY(mouseX, mouseY);
	
			context.repaintView();
		}
		
		release(context: IContext, mouseX: number, mouseY: number): void {
			this.pieceManager.setEndXY(mouseX, mouseY);
			let piece = this.pieceManager.createPiece();
			this.pieceManager.reset();

			//Change_Start
			let strokeWidth = context.getStrokeWidth();
			
			piece.setStrokeWidth(strokeWidth);
			//Change_End
	
			context.addPiece(piece);
		}
		
		drawing(context: IContext, ctx: any): void {
			if (this.pieceManager.isValid()) {
				this.pieceManager.drawing(ctx);
			}
		}
		
		toString(): string {
		    return "ImplState";
		}
		
	}

}

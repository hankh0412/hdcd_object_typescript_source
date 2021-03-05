import {PAINTER as pntr} from "./istate";
import {PAINTER as pntr2} from "../manager/free_path_piece_manager";
import {PAINTER as pntr3} from "./icontext";
import {PAINTER as pntr4} from "../manager/abstract_piece_manager";

export namespace PAINTER.controller.state {

	import IState = pntr.controller.state.IState;
	import FreePathPieceManager = pntr2.controller.manager.FreePathPieceManager;
	import IContext = pntr3.controller.state.IContext;
	import AbstractPieceManager = pntr4.controller.manager.AbstractPieceManager;
	
	export class FreePathState implements IState {

		private static _instance: FreePathState;

		private freePathManager: AbstractPieceManager;
		
		constructor() {
			if(FreePathState._instance) {
				return FreePathState._instance;
			}
	
			this.freePathManager = new FreePathPieceManager();
			
			FreePathState._instance = this;
		}
		
		static getInstance(): IState {
			if (!FreePathState._instance) {
				FreePathState._instance = new FreePathState();
			}
			
			return FreePathState._instance;
		}
		
		press(context: IContext, mouseX: number, mouseY: number): void {
			this.freePathManager.setStartXY(mouseX, mouseY);
		}
		
		drag(context: IContext, mouseX: number, mouseY: number): void {
			this.freePathManager.setEndXY(mouseX, mouseY);
	
			context.repaintView();
		}
		
		release(context: IContext, mouseX: number, mouseY: number): void {
			this.freePathManager.setEndXY(mouseX, mouseY);
			let piece = this.freePathManager.createPiece();
			this.freePathManager.reset();
	
			context.addPiece(piece);
		}
		
		drawing(context: IContext, ctx: any): void {
			if (this.freePathManager.isValid()) {
				this.freePathManager.drawing(ctx);
			}
		}
		
		toString(): string {
		    return "FreePathState";
		}
		
	}

}

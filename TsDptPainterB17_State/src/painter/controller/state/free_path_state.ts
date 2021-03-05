import {PAINTER as pntr} from "./istate";
import {PAINTER as pntr2} from "../manager/free_path_piece_manager";
//Change_Start_DEL
/*
import {PAINTER as pntr3} from "./icontext";
*/
//Change_End

import {PAINTER as pntr3} from "../manager/abstract_piece_manager";

//Change_Start
import {PAINTER as pntr4} from "./impl_state";
//Change_End

export namespace PAINTER.controller.state {

	import IState = pntr.controller.state.IState;
	import FreePathPieceManager = pntr2.controller.manager.FreePathPieceManager;

	//Change_Start_DEL
	/*
	import IContext = pntr3.controller.state.IContext;
	*/
	//Change_End

	import AbstractPieceManager = pntr3.controller.manager.AbstractPieceManager;
	
	//Change_Start
	import ImplState = pntr4.controller.state.ImplState;
	//Change_End

	//Change_Start
	export class FreePathState extends ImplState {
	//Change_End

		private static _instance: FreePathState;

		//Change_Start_DEL
		/*
		private freePathManager: AbstractPieceManager;
		*/
		//Change_End
		
		constructor() {
			//Change_Start
			super();
			//Change_End

			if(FreePathState._instance) {
				return FreePathState._instance;
			}
	
			//Change_Start_DEL
			/*
			this.freePathManager = new FreePathPieceManager();
			*/
			//Change_End

			FreePathState._instance = this;
		}
		
		static getInstance(): IState {
			if (!FreePathState._instance) {
				FreePathState._instance = new FreePathState();
			}
			
			return FreePathState._instance;
		}
		
		//Change_Start_DEL
		/*
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
		*/
		//Change_End

		//Change_Start
		createPieceManager(): AbstractPieceManager {
			return new FreePathPieceManager();
		}
		//Change_End
		
		toString(): string {
		    return "FreePathState";
		}
		
	}

}

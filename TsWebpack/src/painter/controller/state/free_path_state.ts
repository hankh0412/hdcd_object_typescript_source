import {PAINTER as pntr} from "./istate";
import {PAINTER as pntr2} from "../manager/free_path_piece_manager";
import {PAINTER as pntr3} from "../manager/abstract_piece_manager";
import {PAINTER as pntr4} from "./impl_state";

export namespace PAINTER.controller.state {

	import IState = pntr.controller.state.IState;
	import FreePathPieceManager = pntr2.controller.manager.FreePathPieceManager;
	import AbstractPieceManager = pntr3.controller.manager.AbstractPieceManager;
	import ImplState = pntr4.controller.state.ImplState;
	
	export class FreePathState extends ImplState {
	
		private static _instance: FreePathState;

		constructor() {
			super();
			
			if(FreePathState._instance) {
				return FreePathState._instance;
			}
	
			FreePathState._instance = this;
		}
		
		static getInstance(): IState {
			if (!FreePathState._instance) {
				FreePathState._instance = new FreePathState();
			}
			
			return FreePathState._instance;
		}
		
		createPieceManager(): AbstractPieceManager {
			return new FreePathPieceManager();
		}
		
		toString(): string {
		    return "FreePathState";
		}
		
	}

}

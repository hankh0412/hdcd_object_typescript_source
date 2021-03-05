import {PAINTER as pntr} from "./istate";
import {PAINTER as pntr2} from "../manager/line_piece_manager";
import {PAINTER as pntr3} from "../manager/abstract_piece_manager";
import {PAINTER as pntr4} from "./impl_state";

export namespace PAINTER.controller.state {

	import IState = pntr.controller.state.IState;
	import LinePieceManager = pntr2.controller.manager.LinePieceManager;
	import AbstractPieceManager = pntr3.controller.manager.AbstractPieceManager;
	import ImplState = pntr4.controller.state.ImplState;
	
	export class LineState extends ImplState {
	
		private static _instance: LineState;

		constructor() {
			super();
			
			if(LineState._instance) {
				return LineState._instance;
			}
	
			LineState._instance = this;
		}
		
		static getInstance(): IState {
			if (!LineState._instance) {
				LineState._instance = new LineState();
			}
			
			return LineState._instance;
		}
		
		createPieceManager(): AbstractPieceManager {
			return new LinePieceManager();
		}
		
		toString(): string {
		    return "LineState";
		}
		
	}

}

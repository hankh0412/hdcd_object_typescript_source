import {PAINTER as pntr} from "./istate";
import {PAINTER as pntr2} from "../manager/rectangle_piece_manager";
import {PAINTER as pntr3} from "../manager/abstract_piece_manager";
import {PAINTER as pntr4} from "./impl_state";

export namespace PAINTER.controller.state {

	import IState = pntr.controller.state.IState;
	import RectanglePieceManager = pntr2.controller.manager.RectanglePieceManager;
	import AbstractPieceManager = pntr3.controller.manager.AbstractPieceManager;
	import ImplState = pntr4.controller.state.ImplState;
	
	export class RectangleState extends ImplState {
	
		private static _instance: RectangleState;

		constructor() {
			super();
			
			if(RectangleState._instance) {
				return RectangleState._instance;
			}
	
			RectangleState._instance = this;
		}
		
		static getInstance(): IState {
			if (!RectangleState._instance) {
				RectangleState._instance = new RectangleState();
			}
			
			return RectangleState._instance;
		}
		
		createPieceManager(): AbstractPieceManager {
			return new RectanglePieceManager();
		}
		
		toString(): string {
		    return "RectangleState";
		}
		
	}

}

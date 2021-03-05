import {PAINTER as pntr} from "./istate";
import {PAINTER as pntr2} from "../manager/ellipse_piece_manager";
import {PAINTER as pntr3} from "../manager/abstract_piece_manager";
import {PAINTER as pntr4} from "./impl_state";

export namespace PAINTER.controller.state {

	import IState = pntr.controller.state.IState;
	import EllipsePieceManager = pntr2.controller.manager.EllipsePieceManager;
	import AbstractPieceManager = pntr3.controller.manager.AbstractPieceManager;
	import ImplState = pntr4.controller.state.ImplState;
	
	export class EllipseState extends ImplState {
	
		private static _instance: EllipseState;

		constructor() {
			super();
			
			if(EllipseState._instance) {
				return EllipseState._instance;
			}
	
			EllipseState._instance = this;
		}
		
		static getInstance(): IState {
			if (!EllipseState._instance) {
				EllipseState._instance = new EllipseState();
			}
			
			return EllipseState._instance;
		}
		
		createPieceManager(): AbstractPieceManager {
			return new EllipsePieceManager();
		}
		
		toString(): string {
		    return "EllipseState";
		}
		
	}

}

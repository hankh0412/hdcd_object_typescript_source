import {PAINTER as pntr} from "./istate";
import {PAINTER as pntr2} from "../manager/line_piece_manager";

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
	import LinePieceManager = pntr2.controller.manager.LinePieceManager;
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
	export class LineState extends ImplState {
	//Change_End

		private static _instance: LineState;

		//Change_Start_DEL
		/*
		private lineManager: AbstractPieceManager;
		*/
		//Change_End
		
		constructor() {
			//Change_Start
			super();
			//Change_End

			if(LineState._instance) {
				return LineState._instance;
			}
	
			//Change_Start_DEL
			/*
			this.lineManager = new LinePieceManager();
			*/
			//Change_End
			
			LineState._instance = this;
		}
		
		static getInstance(): IState {
			if (!LineState._instance) {
				LineState._instance = new LineState();
			}
			
			return LineState._instance;
		}
		
		//Change_Start_DEL
		/*
		press(context: IContext, mouseX: number, mouseY: number): void {
			this.lineManager.setStartXY(mouseX, mouseY);
		}
		
		drag(context: IContext, mouseX: number, mouseY: number): void {
			this.lineManager.setEndXY(mouseX, mouseY);
	
			context.repaintView();
		}
		
		release(context: IContext, mouseX: number, mouseY: number): void {
			this.lineManager.setEndXY(mouseX, mouseY);
			let piece = this.lineManager.createPiece();
			this.lineManager.reset();
	
			context.addPiece(piece);
		}
		
		drawing(context: IContext, ctx: any): void {
			if (this.lineManager.isValid()) {
				this.lineManager.drawing(ctx);
			}
		}
		*/
		//Change_End

		//Change_Start
		createPieceManager(): AbstractPieceManager {
			return new LinePieceManager();
		}
		//Change_End
		
		toString(): string {
		    return "LineState";
		}
		
	}

}

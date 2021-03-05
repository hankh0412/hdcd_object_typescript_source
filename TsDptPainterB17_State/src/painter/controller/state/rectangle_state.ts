import {PAINTER as pntr} from "./istate";
import {PAINTER as pntr2} from "../manager/rectangle_piece_manager";
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
	import RectanglePieceManager = pntr2.controller.manager.RectanglePieceManager;
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
	export class RectangleState extends ImplState {
	//Change_End

		private static _instance: RectangleState;

		//Change_Start_DEL
		/*
		private rectangleManager: AbstractPieceManager;
		*/
		//Change_End
		
		constructor() {
			//Change_Start
			super();
			//Change_End

			if(RectangleState._instance) {
				return RectangleState._instance;
			}
	
			//Change_Start_DEL
			/*
			this.rectangleManager = new RectanglePieceManager();
			*/
			//Change_End
			
			RectangleState._instance = this;
		}
		
		static getInstance(): IState {
			if (!RectangleState._instance) {
				RectangleState._instance = new RectangleState();
			}
			
			return RectangleState._instance;
		}
		
		//Change_Start_DEL
		/*
		press(context: IContext, mouseX: number, mouseY: number): void {
			this.rectangleManager.setStartXY(mouseX, mouseY);
		}
		
		drag(context: IContext, mouseX: number, mouseY: number): void {
			this.rectangleManager.setEndXY(mouseX, mouseY);
	
			context.repaintView();
		}
		
		release(context: IContext, mouseX: number, mouseY: number): void {
			this.rectangleManager.setEndXY(mouseX, mouseY);
			let piece = this.rectangleManager.createPiece();
			this.rectangleManager.reset();
	
			context.addPiece(piece);
		}
		
		drawing(context: IContext, ctx: any): void {
			if (this.rectangleManager.isValid()) {
				this.rectangleManager.drawing(ctx);
			}
		}
		*/
		//Change_End

		//Change_Start
		createPieceManager(): AbstractPieceManager {
			return new RectanglePieceManager();
		}
		//Change_End
		
		toString(): string {
		    return "RectangleState";
		}
		
	}

}

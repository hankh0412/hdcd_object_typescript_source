import {PAINTER as pntr} from "./istate";
import {PAINTER as pntr2} from "../manager/ellipse_piece_manager";
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
	import EllipsePieceManager = pntr2.controller.manager.EllipsePieceManager;
	
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
	export class EllipseState extends ImplState {
	//Change_End

		private static _instance: EllipseState;

		//Change_Start_DEL
		/*
		private ellipseManager: AbstractPieceManager;
		*/
		//Change_End
		
		constructor() {
			//Change_Start
			super();
			//Change_End

			if(EllipseState._instance) {
				return EllipseState._instance;
			}
	
			//Change_Start_DEL
			/*
			this.ellipseManager = new EllipsePieceManager();
			*/
			//Change_End
			
			EllipseState._instance = this;
		}
		
		static getInstance(): IState {
			if (!EllipseState._instance) {
				EllipseState._instance = new EllipseState();
			}
			
			return EllipseState._instance;
		}
		
		//Change_Start_DEL
		/*
		press(context: IContext, mouseX: number, mouseY: number): void {
			this.ellipseManager.setStartXY(mouseX, mouseY);
		}
		
		drag(context: IContext, mouseX: number, mouseY: number): void {
			this.ellipseManager.setEndXY(mouseX, mouseY);
	
			context.repaintView();
		}
		
		release(context: IContext, mouseX: number, mouseY: number): void {
			this.ellipseManager.setEndXY(mouseX, mouseY);
			let piece = this.ellipseManager.createPiece();
			this.ellipseManager.reset();
	
			context.addPiece(piece);
		}
		
		drawing(context: IContext, ctx: any): void {
			if (this.ellipseManager.isValid()) {
				this.ellipseManager.drawing(ctx);
			}
		}
		*/
		//Change_End

		//Change_Start
		createPieceManager(): AbstractPieceManager {
			return new EllipsePieceManager();
		}
		//Change_End
		
		toString(): string {
		    return "EllipseState";
		}
		
	}

}

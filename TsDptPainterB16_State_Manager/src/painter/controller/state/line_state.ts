import {PAINTER as pntr} from "./istate";
import {PAINTER as pntr2} from "../manager/line_piece_manager";
import {PAINTER as pntr3} from "./icontext";
import {PAINTER as pntr4} from "../manager/abstract_piece_manager";

export namespace PAINTER.controller.state {

	import IState = pntr.controller.state.IState;
	import LinePieceManager = pntr2.controller.manager.LinePieceManager;
	import IContext = pntr3.controller.state.IContext;
	import AbstractPieceManager = pntr4.controller.manager.AbstractPieceManager;
	
	export class LineState implements IState {

		private static _instance: LineState;

		private lineManager: AbstractPieceManager;
		
		constructor() {
			if(LineState._instance) {
				return LineState._instance;
			}
	
			this.lineManager = new LinePieceManager();
			
			LineState._instance = this;
		}
		
		static getInstance(): IState {
			if (!LineState._instance) {
				LineState._instance = new LineState();
			}
			
			return LineState._instance;
		}
		
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
		
		toString(): string {
		    return "LineState";
		}
		
	}

}

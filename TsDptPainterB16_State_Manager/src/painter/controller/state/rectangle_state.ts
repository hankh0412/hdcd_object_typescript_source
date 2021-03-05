import {PAINTER as pntr} from "./istate";
import {PAINTER as pntr2} from "../manager/rectangle_piece_manager";
import {PAINTER as pntr3} from "./icontext";
import {PAINTER as pntr4} from "../manager/abstract_piece_manager";

export namespace PAINTER.controller.state {

	import IState = pntr.controller.state.IState;
	import RectanglePieceManager = pntr2.controller.manager.RectanglePieceManager;
	import IContext = pntr3.controller.state.IContext;
	import AbstractPieceManager = pntr4.controller.manager.AbstractPieceManager;
	
	export class RectangleState implements IState {

		private static _instance: RectangleState;

		private rectangleManager: AbstractPieceManager;
		
		constructor() {
			if(RectangleState._instance) {
				return RectangleState._instance;
			}
	
			this.rectangleManager = new RectanglePieceManager();
			
			RectangleState._instance = this;
		}
		
		static getInstance(): IState {
			if (!RectangleState._instance) {
				RectangleState._instance = new RectangleState();
			}
			
			return RectangleState._instance;
		}
		
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
		
		toString(): string {
		    return "RectangleState";
		}
		
	}

}

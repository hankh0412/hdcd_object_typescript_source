import {PAINTER as pntr} from "./istate";
import {PAINTER as pntr2} from "../manager/ellipse_piece_manager";
import {PAINTER as pntr3} from "./icontext";
import {PAINTER as pntr4} from "../manager/abstract_piece_manager";

export namespace PAINTER.controller.state {

	import IState = pntr.controller.state.IState;
	import EllipsePieceManager = pntr2.controller.manager.EllipsePieceManager;
	import IContext = pntr3.controller.state.IContext;
	import AbstractPieceManager = pntr4.controller.manager.AbstractPieceManager;
	
	export class EllipseState implements IState {

		private static _instance: EllipseState;

		private ellipseManager: AbstractPieceManager;
		
		constructor() {
			
			if(EllipseState._instance) {
				return EllipseState._instance;
			}
	
			this.ellipseManager = new EllipsePieceManager();
			
			EllipseState._instance = this;
		}
		
		static getInstance(): IState {
			if (!EllipseState._instance) {
				EllipseState._instance = new EllipseState();
			}
			
			return EllipseState._instance;
		}
		
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
		
		toString(): string {
		    return "EllipseState";
		}
		
	}

}

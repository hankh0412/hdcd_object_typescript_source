import {PAINTER as pntr} from "../view/painter_view";
import {PAINTER as pntr2} from "../model/painter_model";
import {PAINTER as pntr3} from "./state/icontext";
import {PAINTER as pntr4} from "./state/istate";
import {PAINTER as pntr5} from "../model/piece/abstract_piece";

export namespace PAINTER.controller {

	import PainterView = pntr.view.PainterView;
	import PainterModel = pntr2.model.PainterModel;
	import IContext = pntr3.controller.state.IContext;
	import IState = pntr4.controller.state.IState;
	import AbstractPiece = pntr5.model.piece.AbstractPiece;
	
	export class PainterController implements IContext {

		private painterModel: PainterModel;
	
		private painterView: PainterView;
	
		constructor() {
			
		}
		
		controlPress(mouseX: number, mouseY: number): void {
			let state = this.painterModel.getState();		
			state.press(this, mouseX, mouseY);
		}
		
		controlRelease(mouseX: number, mouseY: number): void {
			let state = this.painterModel.getState();		
			state.release(this, mouseX, mouseY);
		}
		
		controlDrag(mouseX: number, mouseY: number): void {
			let state = this.painterModel.getState();		
			state.drag(this, mouseX, mouseY);		
			
			this.painterView.drawing();
		}
		
		drawing(ctx: any): void {
			let state = this.painterModel.getState();	
			
			//Change_Start
		    ctx.lineWidth = this.painterModel.getStrokeWidth();
			//Change_End

			state.drawing(this, ctx);
		}
		
		setPainterView(painterView: PainterView): void {
			this.painterView = painterView;
		}
		
		setPainterModel(painterModel: PainterModel): void {
			this.painterModel = painterModel;
		}

		setState(state: IState) {
			this.painterModel.setState(state);
		};
		
		changeState(state: IState): void {
			
		}
		
		repaintView(): void {
			this.painterView.repaint();
		}
		
		addPiece(piece: AbstractPiece): void {
			this.painterModel.addPiece(piece);
		}

		//Change_Start
		getStrokeWidth(): number {
			return this.painterModel.getStrokeWidth();
		}
		//Change_End
		
		//Change_Start
		setStrokeWidth(value: number): void {
			this.painterModel.setStrokeWidth(value);
		}
		//Change_End
		
		toString(): string {
		    return "PainterController";
		}
		
	}

}

import {PAINTER as pntr} from "../view/painter_view";
import {PAINTER as pntr2} from "../model/painter_model";
//Change_Start_DEL
/*
import {PAINTER as pntr9} from "./manager/abstract_piece_manager";
*/
//Change_End
import {PAINTER as pntr3} from "./state/icontext";
import {PAINTER as pntr4} from "./state/istate";
import {PAINTER as pntr5} from "../model/piece/abstract_piece";

export namespace PAINTER.controller {

	import PainterView = pntr.view.PainterView;
	import PainterModel = pntr2.model.PainterModel;

	//Change_Start_DEL
	/*
	import AbstractPieceManager = pntr9.controller.manager.AbstractPieceManager;
	*/
	//Change_End

	//Change_Start
	import IContext = pntr3.controller.state.IContext;
	import IState = pntr4.controller.state.IState;
	import AbstractPiece = pntr5.model.piece.AbstractPiece;
	//Change_End
	
	export class PainterController implements IContext {

		private painterModel: PainterModel;
	
		private painterView: PainterView;
	
		constructor() {
			
		}
		
		controlPress(mouseX: number, mouseY: number): void {
			//Change_Start_DEL
			/*
			let pieceManager = this.painterModel.getPieceManager();
			pieceManager.setStartXY(mouseX, mouseY);
			*/
			//Change_End

			//Change_Start
			let state = this.painterModel.getState();		
			state.press(this, mouseX, mouseY);		
			//Change_End
		}
		
		controlRelease(mouseX: number, mouseY: number): void {
			//Change_Start_DEL
			/*
			let pieceManager = this.painterModel.getPieceManager();
			
			pieceManager.setEndXY(mouseX, mouseY);
			let piece = pieceManager.createPiece();
			pieceManager.reset();

			this.painterModel.addPiece(piece);
			*/
			//Change_End

			//Change_Start
			let state = this.painterModel.getState();		
			state.release(this, mouseX, mouseY);		
			//Change_End
		}
		
		controlDrag(mouseX: number, mouseY: number): void {
			//Change_Start_DEL
			/*
			let pieceManager = this.painterModel.getPieceManager();
			pieceManager.setEndXY(mouseX, mouseY);
			*/
			//Change_End

			//Change_Start
			let state = this.painterModel.getState();		
			state.drag(this, mouseX, mouseY);		
			//Change_End

			this.painterView.drawing();
		}
		
		drawing(ctx: any): void {
			//Change_Start_DEL
			/*
			let pieceManager = this.painterModel.getPieceManager();		
			if (pieceManager !== null) {
				if(pieceManager.isValid()) {
					pieceManager.drawing(ctx);
				}	
			}
			*/
			//Change_End

			//Change_Start
			let state = this.painterModel.getState();		
			state.drawing(this, ctx);		
			//Change_End
		}
		
		setPainterView(painterView: PainterView): void {
			this.painterView = painterView;
		}
		
		setPainterModel(painterModel: PainterModel): void {
			this.painterModel = painterModel;
		}

		//Change_Start_DEL
		/*
		setPieceManager(peceManager: AbstractPieceManager): void {
			this.painterModel.setPieceManager(peceManager);
		}
		*/
		//Change_End

		//Change_Start
		setState(state: IState) {
			this.painterModel.setState(state);
		};
		//Change_End
		
		//Change_Start
		changeState(state: IState): void {
			
		}
		
		repaintView(): void {
			this.painterView.repaint();
		}
		
		addPiece(piece: AbstractPiece): void {
			this.painterModel.addPiece(piece);
		}
		//Change_End

		toString(): string {
		    return "PainterController";
		}
		
	}

}

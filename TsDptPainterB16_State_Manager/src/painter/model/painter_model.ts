import {PAINTER as pntr} from "./piece/abstract_piece";
import {PAINTER as pntr2} from "../controller/observer/ipainter_subject";
import {PAINTER as pntr3} from "../controller/observer/ipainter_observer";

//Change_Start_DEL
/*
import {PAINTER as pntr5} from "../controller/manager/abstract_piece_manager";
import {PAINTER as pntr6} from "../controller/manager/line_piece_manager";
*/
//Change_End

//Change_Start
import {PAINTER as pntr4} from "../controller/state/istate";
import {PAINTER as pntr5} from "../controller/state/line_state";
//Change_End

export namespace PAINTER.model {

	import AbstractPiece = pntr.model.piece.AbstractPiece;
	import IPainterSubject = pntr2.controller.observer.IPainterSubject;
	import IPainterObserver = pntr3.controller.observer.IPainterObserver;
	
	//Change_Start_DEL
	/*
	import AbstractPieceManager = pntr5.controller.manager.AbstractPieceManager;
	import LinePieceManager = pntr6.controller.manager.LinePieceManager;
	*/
	//Change_End

	//Change_Start
	import IState = pntr4.controller.state.IState;
	import LineState = pntr5.controller.state.LineState;
	//Change_End
	
	export class PainterModel implements IPainterSubject {
	
		private pieces: AbstractPiece[];

		private observers: IPainterObserver[] = [];

		//Change_Start_DEL
		/*
		private pieceManager: AbstractPieceManager;
		*/
		//Change_End

		//Change_Start
		private state: IState;
		//Change_End
		
		constructor() {
			this.pieces = [];
			
			//Change_Start_DEL
			/*
			this.pieceManager = new LinePieceManager();
			*/
			//Change_End

			//Change_Start
			this.state = LineState.getInstance();
			//Change_End
		}
		
		drawPieces(ctx: any): void {
			let size = this.pieces.length;
	
			for (let i = 0; i < size; i++) {
				this.pieces[i].draw(ctx);
			}
		}
		
		addPiece(piece: AbstractPiece): void {
			this.pieces.push(piece);

			this.notifyObservers();
		}

		getPieces(): AbstractPiece[] {
			return this.pieces;
		}

		notifyObservers(): void {
			for (let i = 0; i < this.observers.length; i++) {
				this.observers[i].update();
			}
		}
		
		registerObserver(oberver: IPainterObserver): void {
			this.observers.push(oberver);
		}
		
		removeObserver(oberver: IPainterObserver): void {
			let index = this.observers.indexOf(oberver);
			if (index >= 0) {
				this.observers.splice(index, 1);
			}
		}

		//Change_Start_DEL
		/*
		getPieceManager(): AbstractPieceManager {
			return this.pieceManager;
		}
		
		setPieceManager(pieceManager: AbstractPieceManager): void {
			this.pieceManager = pieceManager;
		}
		*/
		//Change_End

		//Change_Start
		getState(): IState {
			return this.state;
		}
		
		setState(state: IState): void {
			this.state = state;
		}
		//Change_End
		
		toString(): string {
		    return "PainterModel";
		}
		
	}

}

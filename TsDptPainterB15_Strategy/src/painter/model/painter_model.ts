import {PAINTER as pntr} from "./piece/abstract_piece";
//Change_Start_DEL
/*
import {PAINTER as pntr2} from "../app/painter_constants";
*/
//Change_End
import {PAINTER as pntr3} from "../controller/observer/ipainter_subject";
import {PAINTER as pntr4} from "../controller/observer/ipainter_observer";
import {PAINTER as pntr5} from "../controller/manager/abstract_piece_manager";
import {PAINTER as pntr6} from "../controller/manager/line_piece_manager";

export namespace PAINTER.model {

	import AbstractPiece = pntr.model.piece.AbstractPiece;
	//Change_Start_DEL
	/*
	import PainterConstants = pntr2.app.PainterConstants;
	*/
	//Change_End
	import IPainterSubject = pntr3.controller.observer.IPainterSubject;
	import IPainterObserver = pntr4.controller.observer.IPainterObserver;

	//Change_Start
	import AbstractPieceManager = pntr5.controller.manager.AbstractPieceManager;
	import LinePieceManager = pntr6.controller.manager.LinePieceManager;
	//Change_End
	
	export class PainterModel implements IPainterSubject {
	
		private pieces: AbstractPiece[];

		//Change_Start_DEL
		/*
		private pieceType = PainterConstants.LINE;
		*/
		//Change_End

		private observers: IPainterObserver[] = [];

		//Change_Start
		private pieceManager: AbstractPieceManager;
		//Change_End
		
		constructor() {
			this.pieces = [];
			
			//Change_Start
			this.pieceManager = new LinePieceManager();
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

		//Change_Start_DEL
		/*
		getPieceType(): symbol {
			return this.pieceType;
		}
		
		setPieceType(pieceType: symbol): void {
			this.pieceType = pieceType;
		}
		*/
		//Change_End
		
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

		//Change_Start
		getPieceManager(): AbstractPieceManager {
			return this.pieceManager;
		}
		
		setPieceManager(pieceManager: AbstractPieceManager): void {
			this.pieceManager = pieceManager;
		}
		//Change_End
		
		toString(): string {
		    return "PainterModel";
		}
		
	}

}

import {PAINTER as pntr} from "./piece/abstract_piece";
import {PAINTER as pntr2} from "../app/painter_constants";
import {PAINTER as pntr3} from "../controller/observer/ipainter_subject";
import {PAINTER as pntr4} from "../controller/observer/ipainter_observer";

export namespace PAINTER.model {

	import AbstractPiece = pntr.model.piece.AbstractPiece;
	import PainterConstants = pntr2.app.PainterConstants;

	//Change_Start
	import IPainterSubject = pntr3.controller.observer.IPainterSubject;
	import IPainterObserver = pntr4.controller.observer.IPainterObserver;
	//Change_End
	
	//Change_Start
	export class PainterModel implements IPainterSubject {
	//Change_End

		private pieces: AbstractPiece[];

		private pieceType = PainterConstants.LINE;

		//Change_Start
		private observers: IPainterObserver[] = [];
		//Change_End
		
		constructor() {
		    this.pieces = [];
		}
		
		drawPieces(ctx: any): void {
			let size = this.pieces.length;
	
			for (let i = 0; i < size; i++) {
				this.pieces[i].draw(ctx);
			}
		}
		
		addPiece(piece: AbstractPiece): void {
			this.pieces.push(piece);

			//Change_Start
			this.notifyObservers();
			//Change_End
		}

		getPieceType(): symbol {
			return this.pieceType;
		}
		
		setPieceType(pieceType: symbol): void {
			this.pieceType = pieceType;
		}
		
		getPieces(): AbstractPiece[] {
			return this.pieces;
		}

		//Change_Start
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
		//Change_End
		
		toString(): string {
		    return "PainterModel";
		}
		
	}

}

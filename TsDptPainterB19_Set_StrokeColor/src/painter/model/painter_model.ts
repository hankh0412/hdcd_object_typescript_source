import {PAINTER as pntr} from "./piece/abstract_piece";
import {PAINTER as pntr2} from "../controller/observer/ipainter_subject";
import {PAINTER as pntr3} from "../controller/observer/ipainter_observer";
import {PAINTER as pntr4} from "../controller/state/istate";
import {PAINTER as pntr5} from "../controller/state/line_state";

export namespace PAINTER.model {

	import AbstractPiece = pntr.model.piece.AbstractPiece;
	import IPainterSubject = pntr2.controller.observer.IPainterSubject;
	import IPainterObserver = pntr3.controller.observer.IPainterObserver;
	import IState = pntr4.controller.state.IState;
	import LineState = pntr5.controller.state.LineState;
	
	export class PainterModel implements IPainterSubject {
	
		private pieces: AbstractPiece[];

		private observers: IPainterObserver[] = [];

		private state: IState;

		private strokeWidth: number = 10;

		//Change_Start
		private strokeColor: string = "red";
		//Change_End
		
		constructor() {
			this.pieces = [];
			
			this.state = LineState.getInstance();
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

		getState(): IState {
			return this.state;
		}
		
		setState(state: IState): void {
			this.state = state;
		}

		getStrokeWidth(): number {
			return this.strokeWidth;
		}
		
		setStrokeWidth(strokeWidth: number): void {
			this.strokeWidth = strokeWidth;
		}

		//Change_Start
		getStrokeColor(): string {
			return this.strokeColor;
		}
		//Change_End
		
		//Change_Start
		setStrokeColor(strokeColor: string): void {
			this.strokeColor = strokeColor;
		}
		//Change_End
		
		toString(): string {
		    return "PainterModel";
		}
		
	}

}

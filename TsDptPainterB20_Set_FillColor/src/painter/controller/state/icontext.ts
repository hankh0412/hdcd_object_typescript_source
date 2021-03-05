import {PAINTER as pntr} from "./istate";
import {PAINTER as pntr2} from "../../model/piece/abstract_piece";

export namespace PAINTER.controller.state {

	import IState = pntr.controller.state.IState;
	import AbstractPiece = pntr2.model.piece.AbstractPiece;

	export interface IContext {
		
		changeState(state: IState): void;
		
		repaintView(): void;
		
		addPiece(piece: AbstractPiece): void;

		getStrokeWidth(): number;
		
		setStrokeWidth(value: number): void;
		
		getStrokeColor(): string;
		
		setStrokeColor(value: string): void;

		//Change_Start
		getFillColor(): string;
		//Change_End
		
		//Change_Start
		setFillColor(value: string): void;
		//Change_End
		
	}

}

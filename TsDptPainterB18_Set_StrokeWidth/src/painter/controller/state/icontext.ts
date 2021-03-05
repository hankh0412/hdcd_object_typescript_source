import {PAINTER as pntr} from "./istate";
import {PAINTER as pntr2} from "../../model/piece/abstract_piece";

export namespace PAINTER.controller.state {

	import IState = pntr.controller.state.IState;
	import AbstractPiece = pntr2.model.piece.AbstractPiece;

	export interface IContext {
		
		changeState(state: IState): void;
		
		repaintView(): void;
		
		addPiece(piece: AbstractPiece): void;

		//Change_Start
		getStrokeWidth(): number;
		//Change_End
		
		//Change_Start
		setStrokeWidth(value: number): void;
		//Change_End
	
	}

}

import {PAINTER as pntr} from "../../model/piece/abstract_piece";

export namespace PAINTER.controller.manager {

	import AbstractPiece = pntr.model.piece.AbstractPiece;

	export abstract class AbstractPieceManager {
		
		constructor() {
			
		}
		
		abstract setStartXY(startX: number, startY: number): void;
		
		abstract setEndXY(startX: number, startY: number): void;
		
		abstract drawing(ctx: any): void;
		
		abstract isValid(): boolean;
		
		abstract createPiece(): AbstractPiece;
		
		abstract reset(): void;

	}

}

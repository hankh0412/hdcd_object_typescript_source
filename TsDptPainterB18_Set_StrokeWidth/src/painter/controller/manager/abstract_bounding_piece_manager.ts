import {PAINTER as pntr} from "./abstract_piece_manager";

export namespace PAINTER.controller.manager {

	import AbstractPieceManager = pntr.controller.manager.AbstractPieceManager;
	
	export abstract class AbstractBoundingPieceManager extends AbstractPieceManager{

		protected startX: number = 0;
		protected startY: number = 0;

		protected endX: number = 0;
		protected endY: number = 0;
		
		constructor() {
			super();
		}
	
		setStartXY(startX: number, startY: number): void {
			this.startX = startX;
			this.startY = startY;
		}
		
		setEndXY(endX: number, endY: number): void {
			this.endX = endX;
			this.endY = endY;
		}
		
		isValid(): boolean {
			return this.startX !== this.endX || this.startY !== this.endY;
		}
		
		reset(): void {
			this.startX = 0;
			this.startY = 0;
	
			this.endX = 0;
			this.endY = 0;
		}
		
		toString(): string {
		    return "AbstractBoundingPieceManager";
		}
		
	}

}

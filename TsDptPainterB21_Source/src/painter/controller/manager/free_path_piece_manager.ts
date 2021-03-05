import {PAINTER as pntr} from "./abstract_piece_manager";
import {PAINTER as pntr2} from "../../model/piece/abstract_piece";
import {PAINTER as pntr3} from "../../model/piece/free_path_piece";
import {PAINTER as pntr4} from "../../model/struct/point";

export namespace PAINTER.controller.manager {

	import AbstractPieceManager = pntr.controller.manager.AbstractPieceManager;
	import AbstractPiece = pntr2.model.piece.AbstractPiece;
	import FreePathPiece = pntr3.model.piece.FreePathPiece;
	import Point = pntr4.model.struct.Point;
	
	export class FreePathPieceManager extends AbstractPieceManager{

		private points: Point[] = [];
		
		constructor() {
			super();
		}
	
		setStartXY(startX: number, startY: number): void {
			this.points.push(new Point(startX, startY));
		}
		
		setEndXY(endX: number, endY: number): void {
			this.points.push(new Point(endX, endY));
		}
		
		isValid(): boolean {
			return this.points.length > 1;
		}
		
		createPiece(): AbstractPiece {
			return new FreePathPiece(this.points);
		}
		
		drawing(ctx: any): void {
			if (this.points.length > 1) {
				let startX = this.points[0].x;
				let startY = this.points[0].y;

				ctx.beginPath();
				ctx.moveTo(startX, startY);
				
				for(let i = 1; i < this.points.length; i++) {
					ctx.lineTo(this.points[i].x, this.points[i].y);
				}
				
				ctx.stroke();
			}
		}
		
		reset() {
			this.points = [];
		}
		
		toString() {
		    return "FreePathPieceManager";
		}
		
	}

}

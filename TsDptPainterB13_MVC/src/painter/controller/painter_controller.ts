import {PAINTER as pntr} from "../view/painter_view";
import {PAINTER as pntr2} from "../model/painter_model";
import {PAINTER as pntr3} from "../app/painter_constants";
import {PAINTER as pntr4} from "../model/struct/point";
import {PAINTER as pntr5} from "../model/piece/line_piece";
import {PAINTER as pntr6} from "../model/piece/rectangle_piece";
import {PAINTER as pntr7} from "../model/piece/ellipse_piece";
import {PAINTER as pntr8} from "../model/piece/free_path_piece";

export namespace PAINTER.controller {

	import PainterView = pntr.view.PainterView;
	import PainterModel = pntr2.model.PainterModel;
	import PainterConstants = pntr3.app.PainterConstants;
	import Point = pntr4.model.struct.Point;
	import LinePiece = pntr5.model.piece.LinePiece;
	import RectanglePiece = pntr6.model.piece.RectanglePiece;
	import EllipsePiece = pntr7.model.piece.EllipsePiece;
	import FreePathPiece = pntr8.model.piece.FreePathPiece;

	export class PainterController {

		private painterModel: PainterModel;
	
		private painterView: PainterView;
	
		private startX: number;
		private startY: number;
	
		private endX: number;
		private endY: number;
	
		private points: Point[] = [];
		
		constructor() {
			
		}
		
		controlPress(mouseX: number, mouseY: number): void {
			let pieceType = this.painterModel.getPieceType();
	
			this.startX = mouseX;
			this.startY = mouseY;
	
			if (pieceType === PainterConstants.FREE_PATH) {
				this.points.push(new Point(this.startX, this.startY));
			}
		}
		
		controlRelease(mouseX: number, mouseY: number): void {
			let pieceType = this.painterModel.getPieceType();
	
			this.endX = mouseX;
			this.endY = mouseY;
	
			if (pieceType === PainterConstants.LINE) {
				this.painterModel.addPiece(new LinePiece(this.startX, this.startY, this.endX, this.endY));
			} 
			else if (pieceType === PainterConstants.RECTANGLE) {
				let x = Math.min(this.startX, this.endX);
				let y = Math.min(this.startY, this.endY);
				let width = Math.abs(this.startX - this.endX);
				let height = Math.abs(this.startY - this.endY);
	
				this.painterModel.addPiece(new RectanglePiece(x, y, width, height));
			} 
			else if (pieceType === PainterConstants.ELLIPSE) {
				let x = Math.min(this.startX, this.endX);
				let y = Math.min(this.startY, this.endY);
				let width = Math.abs(this.startX - this.endX);
				let height = Math.abs(this.startY - this.endY);
	
				this.painterModel.addPiece(new EllipsePiece(x, y, width, height));
			} 
			else if (pieceType === PainterConstants.FREE_PATH) {
				this.painterModel.addPiece(new FreePathPiece(this.points));
			}
	
			this.startX = 0;
			this.startY = 0;
	
			this.endX = 0;
			this.endY = 0;
	
			if (pieceType === PainterConstants.FREE_PATH) {
				this.points = [];
			}
			
			this.painterView.repaint();
		}
		
		controlDrag(mouseX: number, mouseY: number): void {
			let pieceType = this.painterModel.getPieceType();
	
			this.endX = mouseX;
			this.endY = mouseY;
	
			if (pieceType === PainterConstants.FREE_PATH) {
				this.points.push(new Point(this.endX, this.endY));
			}
	
			this.painterView.drawing();
		}
		
		
		isValidDrawing(): boolean {
			return this.startX != this.endX || this.startY != this.endY;
		}
		
		drawing(ctx: any): void {
			let pieceType = this.painterModel.getPieceType();
			
			if(pieceType === PainterConstants.LINE) {
				ctx.beginPath();
				ctx.moveTo(this.startX, this.startY);
				ctx.lineTo(this.endX, this.endY);
				ctx.stroke();
			}
			else if(pieceType === PainterConstants.RECTANGLE) {
				let w = this.endX - this.startX;
				let h = this.endY - this.startY;
				
				ctx.fillRect(this.startX, this.startY, w, h);
				
				ctx.strokeRect(this.startX, this.startY, w, h);
			}
			else if(pieceType === PainterConstants.ELLIPSE) {
				let w = this.endX - this.startX;
				let h = this.endY - this.startY;
				
				EllipsePiece.drawEllipseByBezierCurve(ctx, this.startX, this.startY, w, h);
			}
			else if(pieceType === PainterConstants.FREE_PATH) {
				ctx.beginPath();
				ctx.moveTo(this.startX, this.startY);
				
				for(let i = 0; i < this.points.length; i++) {
					ctx.lineTo(this.points[i].x, this.points[i].y);
				}
				
				ctx.stroke();
			}
			
		}
		
		setPieceType(pieceType: symbol): void {
			this.painterModel.setPieceType(pieceType);
		}
		
		setPainterView(painterView: PainterView): void {
			this.painterView = painterView;
		}
		
		setPainterModel(painterModel: PainterModel): void {
			this.painterModel = painterModel;
		}
		
		toString(): string {
		    return "PainterController";
		}
		
	}

}

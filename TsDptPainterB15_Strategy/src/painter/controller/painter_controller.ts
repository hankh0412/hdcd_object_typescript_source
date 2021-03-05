import {PAINTER as pntr} from "../view/painter_view";
import {PAINTER as pntr2} from "../model/painter_model";
//Change_Start_DEL
/*
import {PAINTER as pntr3} from "../app/painter_constants";
import {PAINTER as pntr4} from "../model/struct/point";
import {PAINTER as pntr5} from "../model/piece/line_piece";
import {PAINTER as pntr6} from "../model/piece/rectangle_piece";
import {PAINTER as pntr7} from "../model/piece/ellipse_piece";
import {PAINTER as pntr8} from "../model/piece/free_path_piece";
*/
//Change_End
import {PAINTER as pntr3} from "./manager/abstract_piece_manager";

export namespace PAINTER.controller {

	import PainterView = pntr.view.PainterView;
	import PainterModel = pntr2.model.PainterModel;
	//Change_Start_DEL
	/*
	import PainterConstants = pntr3.app.PainterConstants;
	import Point = pntr4.model.struct.Point;
	import LinePiece = pntr5.model.piece.LinePiece;
	import RectanglePiece = pntr6.model.piece.RectanglePiece;
	import EllipsePiece = pntr7.model.piece.EllipsePiece;
	import FreePathPiece = pntr8.model.piece.FreePathPiece;
	*/
	//Change_End

	//Change_Start
	import AbstractPieceManager = pntr3.controller.manager.AbstractPieceManager;
	//Change_End

	export class PainterController {

		private painterModel: PainterModel;
	
		private painterView: PainterView;
	
		//Change_Start_DEL
		/*
		private startX: number;
		private startY: number;
	
		private endX: number;
		private endY: number;
	
		private points: Point[] = [];
		*/
		//Change_End
		
		constructor() {
			
		}
		
		controlPress(mouseX: number, mouseY: number): void {
			//Change_Start_DEL
			/*
			let pieceType = this.painterModel.getPieceType();
	
			this.startX = mouseX;
			this.startY = mouseY;
	
			if (pieceType === PainterConstants.FREE_PATH) {
				this.points.push(new Point(this.startX, this.startY));
			}
			*/
			//Change_End

			//Change_Start
			let pieceManager = this.painterModel.getPieceManager();
			pieceManager.setStartXY(mouseX, mouseY);
			//Change_End
		}
		
		controlRelease(mouseX: number, mouseY: number): void {
			//Change_Start_DEL
			/*
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
			*/
			//Change_End

			//Change_Start
			let pieceManager = this.painterModel.getPieceManager();
			
			pieceManager.setEndXY(mouseX, mouseY);
			let piece = pieceManager.createPiece();
			pieceManager.reset();

			this.painterModel.addPiece(piece);	
			//Change_End
		}
		
		controlDrag(mouseX: number, mouseY: number): void {
			//Change_Start_DEL
			/*
			let pieceType = this.painterModel.getPieceType();
	
			this.endX = mouseX;
			this.endY = mouseY;
	
			if (pieceType === PainterConstants.FREE_PATH) {
				this.points.push(new Point(this.endX, this.endY));
			}
	
			this.painterView.drawing();
			*/
			//Change_End

			//Change_Start
			let pieceManager = this.painterModel.getPieceManager();
			pieceManager.setEndXY(mouseX, mouseY);

			this.painterView.drawing();
			//Change_End
		}
		
		//Change_Start_DEL
		/*
		isValidDrawing(): boolean {
			return this.startX != this.endX || this.startY != this.endY;
		}
		*/
		//Change_End
		
		drawing(ctx: any): void {
			//Change_Start_DEL
			/*
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
			*/
			//Change_End

			//Change_Start
			let pieceManager = this.painterModel.getPieceManager();		
			if (pieceManager !== null) {
				if(pieceManager.isValid()) {
					pieceManager.drawing(ctx);
				}	
			}
			//Change_End
		}
		
		//Change_Start_DEL
		/*
		setPieceType(pieceType: symbol): void {
			this.painterModel.setPieceType(pieceType);
		}
		*/
		//Change_End
		
		setPainterView(painterView: PainterView): void {
			this.painterView = painterView;
		}
		
		setPainterModel(painterModel: PainterModel): void {
			this.painterModel = painterModel;
		}

		//Change_Start
		setPieceManager(peceManager: AbstractPieceManager): void {
			this.painterModel.setPieceManager(peceManager);
		}
		//Change_End
		
		toString(): string {
		    return "PainterController";
		}
		
	}

}

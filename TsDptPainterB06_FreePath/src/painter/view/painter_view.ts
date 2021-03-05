import {PAINTER as pntr} from "../app/painter_constants";
import {PAINTER as pntr2} from "../model/painter_model";
import {PAINTER as pntr3} from "../model/piece/line_piece";
import {PAINTER as pntr4} from "../model/piece/rectangle_piece";
import {PAINTER as pntr5} from "../model/piece/ellipse_piece";
import {PAINTER as pntr6} from "../model/piece/free_path_piece";

export namespace PAINTER.view {

	import PainterConstants = pntr.app.PainterConstants;
	import PainterModel = pntr2.model.PainterModel;
	import LinePiece = pntr3.model.piece.LinePiece;
	import RectanglePiece = pntr4.model.piece.RectanglePiece;
	import EllipsePiece = pntr5.model.piece.EllipsePiece;

	//Change_Start
	import FreePathPiece = pntr6.model.piece.FreePathPiece;
	//Change_End
	
	export class PainterView {

		private ctx: any;

		private painterModel: PainterModel;
		
		constructor() {
			let canvas: any = document.getElementById("mycanvas");
			canvas.width = PainterConstants.PAINTER_WIDTH;
			canvas.height = PainterConstants.PAINTER_HEIGHT;
			
			canvas.style.border = "1px solid gray";
			canvas.style.cursor = "pointer";
			
			let ctx = canvas.getContext("2d");
		
			this.ctx = ctx;

			this.painterModel = new PainterModel();
			
			let linePiece = new LinePiece(50, 50, 100, 80);
			linePiece.setStrokeColor("pink");
			
			this.painterModel.addPiece(linePiece);
			
			let rectanglePiece = new RectanglePiece(110, 20, 100, 50);
			rectanglePiece.setStrokeColor("red");
			rectanglePiece.setFillColor("blue");
			
			this.painterModel.addPiece(rectanglePiece);
			
			let ellipsePiece = new EllipsePiece(110, 120, 100, 80);
			ellipsePiece.setStrokeColor("green");
			ellipsePiece.setFillColor("yellow");
			
			this.painterModel.addPiece(ellipsePiece);

			//Change_Start
			let points = []
			points.push({x: 10, y: 20});
			points.push({x: 30, y: 140});
			points.push({x: 50, y: 60});
			
			let freePathPiece = new FreePathPiece(points);
			freePathPiece.setStrokeColor("black");
			
			this.painterModel.addPiece(freePathPiece);
			//Change_End
		}
		
		repaint(): void {
			this.painterModel.drawPieces(this.ctx);
		}
		
		toString(): string {
		    return "PainterView";
		}
		
	}

}

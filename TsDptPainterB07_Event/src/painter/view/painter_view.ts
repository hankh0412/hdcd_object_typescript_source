import {PAINTER as pntr} from "../app/painter_constants";
import {PAINTER as pntr2} from "../model/painter_model";

export namespace PAINTER.view {

	import PainterConstants = pntr.app.PainterConstants;
	import PainterModel = pntr2.model.PainterModel;
	//Change_Start_DEL
	/*
	import LinePiece = pntr3.model.piece.LinePiece;
	import RectanglePiece = pntr4.model.piece.RectanglePiece;
	import EllipsePiece = pntr5.model.piece.EllipsePiece;
	import FreePathPiece = pntr6.model.piece.FreePathPiece;
	*/
	//Change_End
	
	export class PainterView {

		private ctx: any;

		private painterModel: PainterModel;

		private canvas: any;
		
		constructor() {
			let canvas: any = document.getElementById("mycanvas");
			canvas.width = PainterConstants.PAINTER_WIDTH;
			canvas.height = PainterConstants.PAINTER_HEIGHT;
			
			canvas.style.border = "1px solid gray";
			canvas.style.cursor = "pointer";

			//Change_Start
			this.canvas = canvas;
			//Change_End
			
			let ctx = canvas.getContext("2d");
		
			this.ctx = ctx;

			this.painterModel = new PainterModel();
			
			//Change_Start_DEL
			/*
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

			let points = []
			points.push({x: 10, y: 20});
			points.push({x: 30, y: 140});
			points.push({x: 50, y: 60});
			
			let freePathPiece = new FreePathPiece(points);
			freePathPiece.setStrokeColor("black");
			
			this.painterModel.addPiece(freePathPiece);
			*/
			//Change_End

			//Change_Start
			canvas.addEventListener("mousedown", this.handleMouseEvent.bind(this), false);
			//Change_End
		}

		repaint(): void {
			this.painterModel.drawPieces(this.ctx);
		}

		//Change_Start
		handleMouseEvent(e: any): void {
			let canvas = this.canvas;
			let painterViewThis = this;
			
			let pressPoint = this.relativePosition(e, canvas);
			
			console.log("mousedown p.x = " + pressPoint.x + " p.y = " + pressPoint.y);
			
			let mousemoveEventListener = function(e: any) {
				let movePoint = painterViewThis.relativePosition(e, painterViewThis.canvas);
				
				console.log("mousemove p.x = " + movePoint.x + " p.y = " + movePoint.y);
		 	};
		 	
		 	document.addEventListener("mousemove", mousemoveEventListener, false);
		 	
		 	let mouseupEventListener = function(e: any) {
		 		let upPoint = painterViewThis.relativePosition(e, canvas);
		 		
		 		console.log("mouseup p.x = " + upPoint.x + " p.y = " + upPoint.y);
				
		 		document.removeEventListener("mousemove", mousemoveEventListener, false);
		 		document.removeEventListener("mouseup", mouseupEventListener, false);
			};
		 	
		 	document.addEventListener("mouseup", mouseupEventListener, false);
		}
		//Change_End

		//Change_Start
		relativePosition(event: any, element: any): any {
			let rect = element.getBoundingClientRect();
			return { x: Math.floor(event.clientX - rect.left),
					 y: Math.floor(event.clientY - rect.top ) };
		}
		//Change_End
		
		toString(): string {
		    return "PainterView";
		}
		
	}

}

import {PAINTER as pntr} from "../app/painter_constants";
import {PAINTER as pntr2} from "../model/painter_model";
import {PAINTER as pntr3} from "../model/piece/ellipse_piece";
import {PAINTER as pntr4} from "../controller/painter_controller";
import {PAINTER as pntr5} from "../controller/observer/ipainter_observer";

export namespace PAINTER.view {

	import PainterConstants = pntr.app.PainterConstants;
	import PainterModel = pntr2.model.PainterModel;
	import PainterController = pntr4.controller.PainterController;
	import IPainterObserver = pntr5.controller.observer.IPainterObserver;
	
	export class PainterView implements IPainterObserver{
	
		private ctx: any;

		private painterModel: PainterModel;

		private canvas: any;

		private painterController: PainterController;
		
		private canvasImageData: any;
		
		constructor() {
			let canvas: any = document.getElementById("mycanvas");
			canvas.width = PainterConstants.PAINTER_WIDTH;
			canvas.height = PainterConstants.PAINTER_HEIGHT;
			
			canvas.style.border = "1px solid gray";
			canvas.style.cursor = "pointer";

			this.canvas = canvas;
			
			let ctx = canvas.getContext("2d");

		    ctx.lineWidth = 10;
			ctx.strokeStyle = "red";
			ctx.fillStyle = "blue";
			
			this.ctx = ctx;

			canvas.addEventListener("mousedown", this.handleMouseEvent.bind(this), false);
		}

		repaint(): void {
			this.painterModel.drawPieces(this.ctx);
		}

		handleMouseEvent(e: any): void {
			let canvas = this.canvas;
			let painterViewThis = this;

			let painterController = this.painterController;
			
			this.saveImageData();
			
			let pressPoint = this.relativePosition(e, canvas);

			painterController.controlPress(pressPoint.x, pressPoint.y);
			
			let mousemoveEventListener = function(e: any) {
				let movePoint = painterViewThis.relativePosition(e, painterViewThis.canvas);

				painterController.controlDrag(movePoint.x, movePoint.y);
		 	};
		 	
		 	document.addEventListener("mousemove", mousemoveEventListener, false);
		 	
		 	let mouseupEventListener = function(e: any) {
		 		let upPoint = painterViewThis.relativePosition(e, canvas);
				
				painterController.controlRelease(upPoint.x, upPoint.y);
				
		 		document.removeEventListener("mousemove", mousemoveEventListener, false);
		 		document.removeEventListener("mouseup", mouseupEventListener, false);
			};
		 	
		 	document.addEventListener("mouseup", mouseupEventListener, false);
		}
		
		relativePosition(event: any, element: any): any {
			let rect = element.getBoundingClientRect();
			return { x: Math.floor(event.clientX - rect.left),
					 y: Math.floor(event.clientY - rect.top ) };
		}

		drawing() {
			this.ctx.putImageData(this.canvasImageData, 0, 0);
			
			if(this.painterController !== null) {
				this.painterController.drawing(this.ctx);
			}
		}
		
		saveImageData() {
			this.canvasImageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
		}
		
		setPainterModel(painterModel: PainterModel) {
			this.painterModel = painterModel;
		}
		
		setPainterController(painterController: PainterController) {
			this.painterController = painterController;
		}

		update(): void {
			this.repaint();
		}
		
		toString(): string {
		    return "PainterView";
		}
		
	}

}

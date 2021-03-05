import {PAINTER as pntr3} from "../../controller/painter_controller";
import {PAINTER as pntr4} from "../../controller/state/line_state";
import {PAINTER as pntr5} from "../../controller/state/rectangle_state";
import {PAINTER as pntr6} from "../../controller/state/ellipse_state";
import {PAINTER as pntr7} from "../../controller/state/free_path_state";

export namespace PAINTER.view.panel {

	import PainterController = pntr3.controller.PainterController;
	import LineState = pntr4.controller.state.LineState;
	import RectangleState = pntr5.controller.state.RectangleState;
	import EllipseState = pntr6.controller.state.EllipseState;
	import FreePathState = pntr7.controller.state.FreePathState;
	
	export class ToolButtonPanel {

		private painterController: PainterController = new PainterController();
		
		constructor() {
			
		}

		initLayout(): void {
			let toolbar = document.getElementById("toolbar");
			
			let inputImage = this.createButton("./images/line.gif", "btnLine");
			toolbar.appendChild(inputImage);
			
			inputImage = this.createButton("./images/rectangle.gif", "btnRectangle");
			toolbar.appendChild(inputImage);
			
			inputImage = this.createButton("./images/ellipse.gif", "btnEllipse");
			toolbar.appendChild(inputImage);
			
			inputImage = this.createButton("./images/free_path.gif", "btnFreePath");
			toolbar.appendChild(inputImage);

			let btnLine = document.getElementById("btnLine");
			let btnRectangle = document.getElementById("btnRectangle");
			let btnEllipse = document.getElementById("btnEllipse");
			let btnFreePath = document.getElementById("btnFreePath");
		
			let painterController = this.painterController; 

			btnLine.addEventListener("click", function(e) {painterController.setState(LineState.getInstance());}, false);
			btnRectangle.addEventListener("click", function(e) {painterController.setState(RectangleState.getInstance());}, false);
			btnEllipse.addEventListener("click", function(e) {painterController.setState(EllipseState.getInstance());}, false);
			btnFreePath.addEventListener("click", function(e) {painterController.setState(FreePathState.getInstance());}, false);
		}
		
		private createButton(imagePath: string, id: string) {
			let inputImage = document.createElement("input");
			inputImage.setAttribute("type","image");
			inputImage.setAttribute("src",imagePath);
			inputImage.setAttribute("id",id);
			
			return inputImage;
		}

		setPainterController(painterController: PainterController): void {
			this.painterController = painterController;
		}
		
		toString(): string {
		    return "ToolButtonPanel";
		}
		
	}

}

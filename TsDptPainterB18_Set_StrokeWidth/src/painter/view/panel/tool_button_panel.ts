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

			//Change_Start
			let size = [1,2,3,4,5,6,8,10,12,14,16,20,24,28];
			let select =  document.createElement("select");
			for(let i=0; i < size.length; i++) {
				let option = document.createElement("option");
				option.setAttribute("value",size[i].toString());
				let optionText = document.createTextNode(size[i].toString());
				option.appendChild(optionText);
				
				select.appendChild(option);
			}
			select.selectedIndex = 7;
			
			let labelStrokeWidth = document.createElement("label");
			let labelStrokeWidthText = document.createTextNode(" 선너비: ");
			
			labelStrokeWidth.appendChild(labelStrokeWidthText);
			labelStrokeWidth.appendChild(select);
			
			toolbar.appendChild(labelStrokeWidth);
			
			select.addEventListener("change", function(e) {painterController.setStrokeWidth(parseInt(this.value, 10));},false);
			//Change_End
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

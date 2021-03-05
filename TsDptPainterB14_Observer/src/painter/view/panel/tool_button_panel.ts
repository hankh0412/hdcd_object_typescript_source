//Change_Start_DEL
/*
import {PAINTER as pntr} from "../painter_view";
*/
//Change_End
import {PAINTER as pntr2} from "../../app/painter_constants";
import {PAINTER as pntr3} from "../../controller/painter_controller";

export namespace PAINTER.view.panel {

	//Change_Start_DEL
	/*
	import PainterView = pntr.view.PainterView;
	*/
	//Change_End

	import PainterConstants = pntr2.app.PainterConstants;
	import PainterController = pntr3.controller.PainterController;
	
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

			btnLine.addEventListener("click", function(e) {painterController.setPieceType(PainterConstants.LINE);}, false);
			btnRectangle.addEventListener("click", function(e) {painterController.setPieceType(PainterConstants.RECTANGLE);}, false);
			btnEllipse.addEventListener("click", function(e) {painterController.setPieceType(PainterConstants.ELLIPSE);}, false);
			btnFreePath.addEventListener("click", function(e) {painterController.setPieceType(PainterConstants.FREE_PATH);}, false);
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

import {PAINTER as pntr} from "../painter_view";
import {PAINTER as pntr2} from "../../app/painter_constants";

export namespace PAINTER.view.panel {

	//Change_Start
	import PainterView = pntr.view.PainterView;
	import PainterConstants = pntr2.app.PainterConstants;
	//Change_End

	export class ToolButtonPanel {

		//Change_Start
		private painterView: PainterView;
		//Change_End
		
		//Change_Start
		constructor(painterView: PainterView) {
			this.painterView = painterView;
		}
		//Change_End
		
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

			//Change_Start
			let btnLine = document.getElementById("btnLine");
			let btnRectangle = document.getElementById("btnRectangle");
			let btnEllipse = document.getElementById("btnEllipse");
			let btnFreePath = document.getElementById("btnFreePath");
		
			let painterViewThis = this.painterView;
			
			btnLine.addEventListener("click", function(e) {painterViewThis.setPieceType(PainterConstants.LINE);}, false);
			btnRectangle.addEventListener("click", function(e) {painterViewThis.setPieceType(PainterConstants.RECTANGLE);}, false);
			btnEllipse.addEventListener("click", function(e) {painterViewThis.setPieceType(PainterConstants.ELLIPSE);}, false);
			btnFreePath.addEventListener("click", function(e) {painterViewThis.setPieceType(PainterConstants.FREE_PATH);}, false);
			//Change_End
		}
		
		private createButton(imagePath: string, id: string) {
			let inputImage = document.createElement("input");
			inputImage.setAttribute("type","image");
			inputImage.setAttribute("src",imagePath);
			inputImage.setAttribute("id",id);
			
			return inputImage;
		}
		
		toString(): string {
		    return "ToolButtonPanel";
		}
		
	}

}

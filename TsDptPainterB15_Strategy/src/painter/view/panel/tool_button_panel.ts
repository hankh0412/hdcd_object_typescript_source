//Change_Start_DEL
/*
import {PAINTER as pntr2} from "../../app/painter_constants";
*/
//Change_End
import {PAINTER as pntr3} from "../../controller/painter_controller";
import {PAINTER as pntr4} from "../../controller/manager/line_piece_manager";
import {PAINTER as pntr5} from "../../controller/manager/rectangle_piece_manager";
import {PAINTER as pntr6} from "../../controller/manager/ellipse_piece_manager";
import {PAINTER as pntr7} from "../../controller/manager/free_path_piece_manager";

export namespace PAINTER.view.panel {

	//Change_Start_DEL
	/*
	import PainterConstants = pntr2.app.PainterConstants;
	*/
	//Change_End
	
	import PainterController = pntr3.controller.PainterController;

	//Change_Start
	import LinePieceManager = pntr4.controller.manager.LinePieceManager;
	import RectanglePieceManager = pntr5.controller.manager.RectanglePieceManager;
	import EllipsePieceManager = pntr6.controller.manager.EllipsePieceManager;
	import FreePathPieceManager = pntr7.controller.manager.FreePathPieceManager;
	//Change_End
	
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

			//Change_Start_DEL
			/*
			btnLine.addEventListener("click", function(e) {painterController.setPieceType(PainterConstants.LINE);}, false);
			btnRectangle.addEventListener("click", function(e) {painterController.setPieceType(PainterConstants.RECTANGLE);}, false);
			btnEllipse.addEventListener("click", function(e) {painterController.setPieceType(PainterConstants.ELLIPSE);}, false);
			btnFreePath.addEventListener("click", function(e) {painterController.setPieceType(PainterConstants.FREE_PATH);}, false);
			*/
			//Change_End

			//Change_Start
			btnLine.addEventListener("click", function(e) {painterController.setPieceManager(new LinePieceManager());}, false);
			btnRectangle.addEventListener("click", function(e) {painterController.setPieceManager(new RectanglePieceManager());}, false);
			btnEllipse.addEventListener("click", function(e) {painterController.setPieceManager(new EllipsePieceManager());}, false);
			btnFreePath.addEventListener("click", function(e) {painterController.setPieceManager(new FreePathPieceManager());}, false);
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

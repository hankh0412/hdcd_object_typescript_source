import {PAINTER as pntr} from "../painter_view";
import {PAINTER as pntr2} from "../../app/painter_constants";
import {PAINTER as pntr3} from "../../controller/painter_controller";

//Change_Start_DEL
/*
import {PAINTER as pntr4} from "../../controller/manager/line_piece_manager";
import {PAINTER as pntr5} from "../../controller/manager/rectangle_piece_manager";
import {PAINTER as pntr6} from "../../controller/manager/ellipse_piece_manager";
import {PAINTER as pntr7} from "../../controller/manager/free_path_piece_manager";
*/
//Change_End

import {PAINTER as pntr4} from "../../controller/state/line_state";
import {PAINTER as pntr5} from "../../controller/state/rectangle_state";
import {PAINTER as pntr6} from "../../controller/state/ellipse_state";
import {PAINTER as pntr7} from "../../controller/state/free_path_state";

export namespace PAINTER.view.panel {

	import PainterView = pntr.view.PainterView;
	import PainterConstants = pntr2.app.PainterConstants;
	import PainterController = pntr3.controller.PainterController;

	//Change_Start_DEL
	/*
	import LinePieceManager = pntr4.controller.manager.LinePieceManager;
	import RectanglePieceManager = pntr5.controller.manager.RectanglePieceManager;
	import EllipsePieceManager = pntr6.controller.manager.EllipsePieceManager;
	import FreePathPieceManager = pntr7.controller.manager.FreePathPieceManager;
	*/
	//Change_End

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

			//Change_Start_DEL
			/*
			btnLine.addEventListener("click", function(e) {painterController.setPieceManager(new LinePieceManager());}, false);
			btnRectangle.addEventListener("click", function(e) {painterController.setPieceManager(new RectanglePieceManager());}, false);
			btnEllipse.addEventListener("click", function(e) {painterController.setPieceManager(new EllipsePieceManager());}, false);
			btnFreePath.addEventListener("click", function(e) {painterController.setPieceManager(new FreePathPieceManager());}, false);
			*/
			//Change_End

			//Change_Start
			btnLine.addEventListener("click", function(e) {painterController.setState(LineState.getInstance());}, false);
			btnRectangle.addEventListener("click", function(e) {painterController.setState(RectangleState.getInstance());}, false);
			btnEllipse.addEventListener("click", function(e) {painterController.setState(EllipseState.getInstance());}, false);
			btnFreePath.addEventListener("click", function(e) {painterController.setState(FreePathState.getInstance());}, false);
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

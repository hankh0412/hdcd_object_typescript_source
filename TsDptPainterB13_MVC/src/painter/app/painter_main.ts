import {PAINTER as pntr} from "../view/painter_view";
import {PAINTER as pntr2} from "../view/panel/tool_button_panel";
import {PAINTER as pntr3} from "../model/painter_model";
import {PAINTER as pntr5} from "../controller/painter_controller";

export namespace PAINTER.app {

	import PainterView = pntr.view.PainterView;
	import ToolButtonPanel = pntr2.view.panel.ToolButtonPanel;
	import PainterModel = pntr3.model.PainterModel;
	import PainterController = pntr5.controller.PainterController;

	export class PainterMain {

		//Change_Start
		private painterModel: PainterModel;
		//Change_End

		//Change_Start
		private painterView: PainterView;
		//Change_End
		
		//Change_Start
		private painterController: PainterController;
		//Change_End

		//Change_Start
		private toolButtonPanel: ToolButtonPanel;
		//Change_End
		
		constructor(painterDivId: string) {
			let painter = document.getElementById(painterDivId);
			
			let toolbar = document.createElement("div");
			toolbar.setAttribute("id","toolbar");
			
			let mycanvas = document.createElement("canvas");
			mycanvas.setAttribute("id","mycanvas");
			
			painter.appendChild(toolbar);
			painter.appendChild(mycanvas);

			//Change_Start
			this.painterModel = new PainterModel();
			//Change_End
			
			//Change_Start_DEL
			/*
			let painterView = new PainterView();
			*/
			//Change_End

			//Change_Start
			this.painterView = new PainterView();
			//Change_End
			
			//Change_Start
			this.painterController = new PainterController();
			//Change_End
			
			//Change_Start_DEL
			/*
			let toolButtonPanel = new ToolButtonPanel(painterView);
			
			toolButtonPanel.initLayout();
			*/
			//Change_End

			//Change_Start
			this.toolButtonPanel = new ToolButtonPanel();
			this.setup();
			
			this.toolButtonPanel.initLayout();
			//Change_End
		}

		//Change_Start
		setup(): void {
			this.painterController.setPainterModel(this.painterModel);
			this.painterController.setPainterView(this.painterView);
			
			this.painterView.setPainterModel(this.painterModel);
			this.painterView.setPainterController(this.painterController);
			
			this.toolButtonPanel.setPainterController(this.painterController);
		}
		//Change_End

		toString(): string {
		    return "PainterMain";
		}
		
	}

}

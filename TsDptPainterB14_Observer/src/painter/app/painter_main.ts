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

		private painterModel: PainterModel;
		private painterView: PainterView;
		private painterController: PainterController;
		
		private toolButtonPanel: ToolButtonPanel;
		
		constructor(painterDivId: string) {
			let painter = document.getElementById(painterDivId);
			
			let toolbar = document.createElement("div");
			toolbar.setAttribute("id","toolbar");
			
			let mycanvas = document.createElement("canvas");
			mycanvas.setAttribute("id","mycanvas");
			
			painter.appendChild(toolbar);
			painter.appendChild(mycanvas);

			this.painterModel = new PainterModel();
			this.painterView = new PainterView();
			this.painterController = new PainterController();
			
			this.toolButtonPanel = new ToolButtonPanel();

			this.setup();
			
			this.toolButtonPanel.initLayout();
		}

		setup(): void {
			this.painterController.setPainterModel(this.painterModel);
			this.painterController.setPainterView(this.painterView);
			
			this.painterView.setPainterModel(this.painterModel);
			this.painterView.setPainterController(this.painterController);
			
			this.toolButtonPanel.setPainterController(this.painterController);

			//Change_Start
			this.painterModel.registerObserver(this.painterView);
			//Change_End
		}
		
		toString(): string {
		    return "PainterMain";
		}
		
	}

}

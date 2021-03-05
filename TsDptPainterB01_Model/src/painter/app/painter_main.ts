import {PAINTER as pntr} from "../view/painter_view";
import {PAINTER as pntr2} from "../view/panel/tool_button_panel";

export namespace PAINTER.app {

	import PainterView = pntr.view.PainterView;
	import ToolButtonPanel = pntr2.view.panel.ToolButtonPanel;

	export class PainterMain {
		//Change_Start_DEL
		/*
		constructor() {
			let painterView = new PainterView();
			painterView.repaint();

			let toolButtonPanel = new ToolButtonPanel();
			toolButtonPanel.initLayout();
		}
		*/
		//Change_End

		//Change_Start
		constructor(painterDivId: string) {
		//Change_End
				
			//Change_Start
			let painter = document.getElementById(painterDivId);
			
			let toolbar = document.createElement("div");
			toolbar.setAttribute("id","toolbar");
			
			let mycanvas = document.createElement("canvas");
			mycanvas.setAttribute("id","mycanvas");
			
			painter.appendChild(toolbar);
			painter.appendChild(mycanvas);
			//Change_End
			
			let painterView = new PainterView();
			painterView.repaint();
			
			let toolButtonPanel = new ToolButtonPanel();
			
			toolButtonPanel.initLayout();
		}

		toString(): string {
		    return "PainterMain";
		}
		
	}

}

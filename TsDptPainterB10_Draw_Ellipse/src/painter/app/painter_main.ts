import {PAINTER as pntr} from "../view/painter_view";
import {PAINTER as pntr2} from "../view/panel/tool_button_panel";

export namespace PAINTER.app {

	import PainterView = pntr.view.PainterView;
	import ToolButtonPanel = pntr2.view.panel.ToolButtonPanel;

	export class PainterMain {
		
		constructor(painterDivId: string) {
			let painter = document.getElementById(painterDivId);
			
			let toolbar = document.createElement("div");
			toolbar.setAttribute("id","toolbar");
			
			let mycanvas = document.createElement("canvas");
			mycanvas.setAttribute("id","mycanvas");
			
			painter.appendChild(toolbar);
			painter.appendChild(mycanvas);
			
			let painterView = new PainterView();
			
			let toolButtonPanel = new ToolButtonPanel(painterView);
			
			toolButtonPanel.initLayout();
		}

		toString(): string {
		    return "PainterMain";
		}
		
	}

}

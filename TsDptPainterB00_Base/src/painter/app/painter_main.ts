import {PAINTER as pntr} from "../view/painter_view";
import {PAINTER as pntr2} from "../view/panel/tool_button_panel";

export namespace PAINTER.app {

	import PainterView = pntr.view.PainterView;
	import ToolButtonPanel = pntr2.view.panel.ToolButtonPanel;

	export class PainterMain {
		
		constructor() {
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

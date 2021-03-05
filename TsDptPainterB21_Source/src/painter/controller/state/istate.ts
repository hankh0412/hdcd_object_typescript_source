import {PAINTER as pntr} from "./icontext";

export namespace PAINTER.controller.state {

	import IContext = pntr.controller.state.IContext;

	export interface IState {
		
		press(context: IContext, mouseX: number, mouseY: number): void;
		
		drag(context: IContext, mouseX: number, mouseY: number): void;
		
		release(context: IContext, mouseX: number, mouseY: number): void;
		
		drawing(context: IContext, ctx: any): void;
		
	}

}

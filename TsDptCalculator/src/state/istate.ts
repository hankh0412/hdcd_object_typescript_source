import {CALC as calc} from "./icontext";

export namespace CALC.state {

	import IContext = calc.state.IContext;

	export interface IState {
		
		action(context: IContext, actionCommand: string): void;
	
	}

}

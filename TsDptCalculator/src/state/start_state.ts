import {CALC as calc} from "./istate";
import {CALC as calc2} from "./icontext";
import {CALC as calc3} from "./input_state";

export namespace CALC.state {

	import IState = calc.state.IState;
	import IContext = calc2.state.IContext;
	
	export class StartState implements IState {

		private static _instance: IState;
		
		constructor() {
			if(StartState._instance) {
				return StartState._instance;
			}
			
			StartState._instance = this;
		}
		
		static getInstance() {
			if (!StartState._instance) {
				StartState._instance = new StartState();
			}
			
			return StartState._instance;
		}
		
		action(context: IContext, actionCommand: string): void {

			let InputState = calc3.state.InputState;

			context.updateDisplay(actionCommand);
	
	        context.changeState(InputState.getInstance());
		}

		toString(): string {
			return "StartState";
		}
		
	}

}

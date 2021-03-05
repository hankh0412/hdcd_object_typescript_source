import {CALC as calc} from "./istate";
import {CALC as calc2} from "./icontext";
import {CALC as calc3} from "./input_state";

export namespace CALC.state {

	import IState = calc.state.IState;
	import IContext = calc2.state.IContext;
	
	export class OperatorState implements IState {

		private static _instance: IState;
		
		constructor() {
			if(OperatorState._instance) {
				return OperatorState._instance;
			}
			
			OperatorState._instance = this;
		}
		
		static getInstance() {
			if (!OperatorState._instance) {
				OperatorState._instance = new OperatorState();
			}
			
			return OperatorState._instance;
		}
		
		action(context: IContext, actionCommand: string): void {

			let InputState = calc3.state.InputState;

			if (context.isOperator(actionCommand)) {
	        	context.setLastOperator(actionCommand);
	        }    
	        else {
	            context.updateDisplay("");
	            context.appendInputToDisplay(actionCommand);
	
	            context.changeState(InputState.getInstance());
	        }
		}

		toString(): string {
			return "OperatorState";
		}
		
	}

}

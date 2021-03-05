import {CALC as calc} from "./istate";
import {CALC as calc2} from "./icontext";
import {CALC as calc3} from "./operator_state";

export namespace CALC.state {

	import IState = calc.state.IState;
	import IContext = calc2.state.IContext;
	
	export class InputState implements IState {
		
		private static _instance: IState;

		constructor() {
			
			if(InputState._instance) {
				return InputState._instance;
			}
			
			InputState._instance = this;
		}
		
		static getInstance(): IState {
			if (!InputState._instance) {
				InputState._instance = new InputState();
			}
			
			return InputState._instance;
		}
		
		action(context: IContext, actionCommand: string): void {
			let OperatorState = calc3.state.OperatorState;

	        if (context.isOperator(actionCommand)) {
	            context.calculate();
	            context.setLastOperator(actionCommand);
	
	            context.changeState(OperatorState.getInstance());
	        }
	        else {
	            context.appendInputToDisplay(actionCommand);
	        }
		}

		toString(): string {
			return "InputState";
		}
		
	}

}

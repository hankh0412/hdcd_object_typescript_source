import {CALC as calc} from "./istate";

export namespace CALC.state {

	import IState = calc.state.IState;
	
	export interface IContext {
		
		changeState(state: IState): void;
		
		updateDisplay(text: string): void;
		
		appendInputToDisplay(input: string): void;
		
		isOperator(actionCommand: string): boolean;
		
		calculate(): void;
		
		setLastOperator(lastCommand: string): void;
		
	}

}

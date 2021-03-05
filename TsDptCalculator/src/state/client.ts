import {CALC as calc} from "./istate";
import {CALC as calc2} from "./start_state";

export namespace CALC.state {

	import IState = calc.state.IState;
	import StartState = calc2.state.StartState;

	export class Client {

		private displayNumber: string = "";

		private result: number = 0;
		private lastOperator: string = "=";

		private state: IState;
		
		constructor() {
	        this.changeState(StartState.getInstance());
		}
		
		updateDisplay(text: string): void {
			this.displayNumber = text;
	        
	        console.log("display : " + text);
		}
		
		appendInputToDisplay(input_: string): void {
			this.updateDisplay(this.displayNumber + input_);
		}
		
		calculate(): void {
			this._calculate(this.lastOperator, parseInt(this.displayNumber, 10));
		}
		
		_calculate(operator: string, value: number): void {
			if (operator === "+") {
	            this.result += value;
			}
			else if (operator === "-") {
	            this.result -= value;
			}
	        else if (operator === "*") {
	            this.result *= value;
	        }
	        else if (operator === "/") {
	            this.result /= value;
	        }
	        else if (operator === "=") {
	            this.result = value;
	        }
	
	        this.updateDisplay("" + this.result);
		}
		
		changeState(state: IState): void {
			this.state = state;
	
	        console.log("changeState -> " + state.toString());
		}
		
		isOperator(actionCommand: string): boolean {
			if (actionCommand === "+") {
	            return true;
			}
	        else if (actionCommand === "-") {
	            return true;
	        }
	        else if (actionCommand === "*") {
	            return true;
	        }
	        else if (actionCommand === "/") {
	            return true;
	        }
	        else if (actionCommand === "=") {
	            return true;
	        }
	
	        return false
		}
		
		action(actionCommand: string): void {
			this.state.action(this, actionCommand);
		}
		
		setLastOperator(lastCommand: string): void {
			this.lastOperator = lastCommand;
		}	
		
	}

}

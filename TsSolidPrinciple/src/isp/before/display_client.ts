import {CALC as calc} from "./calculator";
import {CALC as calc2} from "./abstract_operation";

export namespace CALC.isp.before {

	import Calculator = calc.isp.before.Calculator;
	import AbstractOperation = calc2.isp.before.AbstractOperation;

	export class DisplayClient {
		
		constructor() {
			
		}
		
		request(calculator: Calculator, operation: AbstractOperation, firstNumber: number, secondNumber: number): void {
			calculator.display(operation, firstNumber, secondNumber);
		}
			
		toString() {
		    return "DisplayClient";
		}
		
	}

}

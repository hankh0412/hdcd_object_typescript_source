import {CALC as calc} from "./calculator";
import {CALC as calc2} from "./abstract_operation";

export namespace CALC.isp.before {

	import Calculator = calc.isp.before.Calculator;
	import AbstractOperation = calc2.isp.before.AbstractOperation;

	export class CalcClient {
		
		constructor() {
			
		}
		
		request(calculator: Calculator, operation: AbstractOperation, firstNumber: number, secondNumber: number): number {
			calculator.setOperation(operation);
			
			let answer = calculator.calculate(firstNumber, secondNumber);
			
			return answer;
		}
		
		toString() {
		    return "CalcClient";
		}
		
	}

}

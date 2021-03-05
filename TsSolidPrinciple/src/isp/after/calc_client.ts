import {CALC as calc} from "./calculator";
import {CALC as calc2} from "./abstract_operation";

export namespace CALC.isp.after {

	import Calculator = calc.isp.after.Calculator;
	import AbstractOperation = calc2.isp.after.AbstractOperation;

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

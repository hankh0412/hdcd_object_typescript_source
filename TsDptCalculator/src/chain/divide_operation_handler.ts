import {CALC as calc} from "./abstract_operation_handler";
import {CALC as calc2} from "./request";

export namespace CALC.chain {

	import AbstractOperationHandler = calc.chain.AbstractOperationHandler;
	import Request = calc2.chain.Request;

	export class DivideOperationHandler extends AbstractOperationHandler {
		
		constructor(operator: string) {
			super(operator);
		}
	
		operate(request: Request) {
			let operator = this.getOperator();
	
			let firstNumber = request.getFirstNumber(operator);
			let secondNumber = request.getSecondNumber(operator);
	
			return firstNumber / secondNumber;
		}
		
	}

}

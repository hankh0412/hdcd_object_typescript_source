import {CALC as calc} from "./abstract_operation_expression";

export namespace CALC.decorator {

	import AbstractOperationExpression = calc.decorator.AbstractOperationExpression;

	export class MultiplyOperationExpression extends AbstractOperationExpression {
		
		constructor() {
			super();
		}
	
		operate(): number {
			let firstOperandExpression = this.operandList[0];
			let secondOperandExpression = this.operandList[1];
	
			let firstResult = firstOperandExpression.operate();
			let secondResult = secondOperandExpression.operate();
	
			return firstResult * secondResult;
		}
		
	}

}

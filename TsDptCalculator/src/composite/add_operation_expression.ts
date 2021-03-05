import {CALC as calc} from "./abstract_operation_expression";

export namespace CALC.composite {

	import AbstractOperationExpression = calc.composite.AbstractOperationExpression;

	export class AddOperationExpression extends AbstractOperationExpression {
		
		constructor() {
			super();
		}
	
		operate(): number {
			let firstOperandExpression = this.operandList[0];
			let secondOperandExpression = this.operandList[1];
	
			let firstResult = firstOperandExpression.operate();
			let secondResult = secondOperandExpression.operate();
	
			return firstResult + secondResult;
		}
		
	}

}

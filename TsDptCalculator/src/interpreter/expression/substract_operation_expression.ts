import {CALC as calc} from "./abstract_operation_expression";

export namespace CALC.interpreter.expression {

	import AbstractOperationExpression = calc.interpreter.expression.AbstractOperationExpression;

	export class SubstractOperationExpression extends AbstractOperationExpression {
		
		constructor() {
			super();
		}
	
		operate() {
			let firstOperandExpression = this.operandList[0];
			let secondOperandExpression = this.operandList[1];
	
			let firstResult = firstOperandExpression.operate();
			let secondResult = secondOperandExpression.operate();
	
			return firstResult - secondResult;
		}
		
		getFunctionName() {
			return "SUB";
		}
		
	}

}

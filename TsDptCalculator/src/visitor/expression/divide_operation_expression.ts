import {CALC as calc} from "./abstract_operation_expression";

export namespace CALC.visitor.expression {

	import AbstractOperationExpression = calc.visitor.expression.AbstractOperationExpression;
	
	export class DivideOperationExpression extends AbstractOperationExpression {
		
		constructor() {
			super();
		}
	
		operate(): number {
			let firstOperandExpression = this.operandList[0];
			let secondOperandExpression = this.operandList[1];
	
			let firstResult = firstOperandExpression.operate();
			let secondResult = secondOperandExpression.operate();
	
			return firstResult / secondResult;
		}
		
	}

}

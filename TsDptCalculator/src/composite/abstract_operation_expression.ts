import {CALC as calc} from "./abstract_expression";

export namespace CALC.composite {

	import AbstractExpression = calc.composite.AbstractExpression;

	export abstract class AbstractOperationExpression extends AbstractExpression {

		protected operandList: AbstractExpression[] = [];
		
		constructor() {
			super();
		}
	
		addOperandExpression(operandExpression: AbstractExpression): void {
			this.operandList.push(operandExpression);
		}
		
	}

}

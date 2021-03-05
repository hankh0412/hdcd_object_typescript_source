import {CALC as calc} from "./abstract_expression";

export namespace CALC.decorator {

	import AbstractExpression = calc.decorator.AbstractExpression;

	export class Calculator {

		private expression: AbstractExpression;
		
		constructor() {
			
		}
		
		calculate(): number {
			return this.expression.operate();
		}
		
		setExpression(expression: AbstractExpression): void {
			this.expression = expression;
		}
		
	}

}

import {CALC as calc} from "./abstract_expression";

export namespace CALC.decorator {

	import AbstractExpression = calc.decorator.AbstractExpression;

	export abstract class AbstractDecoratorExpression extends AbstractExpression {

		protected expression: AbstractExpression;
		
		constructor(expression: AbstractExpression) {
			super();
			
			this.expression = expression;
		}
	
		setExpression(expression: AbstractExpression): void {
			this.expression = expression;
		}
		
	}

}

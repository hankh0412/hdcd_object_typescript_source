import {CALC as calc} from "./abstract_decorator_expression";
import {CALC as calc2} from "./abstract_expression";

export namespace CALC.decorator {

	import AbstractDecoratorExpression = calc.decorator.AbstractDecoratorExpression;
	import AbstractExpression = calc2.decorator.AbstractExpression;

	export class PowDecoratorExpression extends AbstractDecoratorExpression {

		private exponent: number;
		
		constructor(expression: AbstractExpression, exponent: number) {
			super(expression);
			
			this.exponent = exponent;
		}
	
		operate(): number {
			return Math.pow(this.expression.operate(), this.exponent);
		}
		
	}

}

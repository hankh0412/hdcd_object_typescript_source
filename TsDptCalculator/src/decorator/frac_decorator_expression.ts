import {CALC as calc} from "./abstract_decorator_expression";
import {CALC as calc2} from "./abstract_expression";

export namespace CALC.decorator {

	import AbstractDecoratorExpression = calc.decorator.AbstractDecoratorExpression;
	import AbstractExpression = calc2.decorator.AbstractExpression;

	export class FracDecoratorExpression extends AbstractDecoratorExpression {
		
		constructor(expression: AbstractExpression) {
			super(expression);
		}
	
		operate(): number {
			return 1 / this.expression.operate();
		}
		
	}

}

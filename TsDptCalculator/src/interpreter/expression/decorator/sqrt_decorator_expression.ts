import {CALC as calc} from "./abstract_decorator_expression";
import {CALC as calc2} from "../abstract_expression";

export namespace CALC.interpreter.expression.decorator {

	import AbstractDecoratorExpression = calc.interpreter.expression.decorator.AbstractDecoratorExpression;

	export class SqrtDecoratorExpression extends AbstractDecoratorExpression {
		
		constructor() {
			super();
		}
	
		operate() {
			return Math.sqrt(this.expression.operate());
		}
		
		getFunctionName() {
			return "SQRT";
		}
		
	}

}

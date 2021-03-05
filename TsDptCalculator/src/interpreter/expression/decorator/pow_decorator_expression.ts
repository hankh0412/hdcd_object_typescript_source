import {CALC as calc} from "./abstract_decorator_expression";
import {CALC as calc2} from "../abstract_expression";

export namespace CALC.interpreter.expression.decorator {

	import AbstractDecoratorExpression = calc.interpreter.expression.decorator.AbstractDecoratorExpression;

	export class PowDecoratorExpression extends AbstractDecoratorExpression {

		private exponent: number;
		
		constructor() {
			super();
		}
	
		operate() {
			return Math.pow(this.expression.operate(), this.exponent);
		}
		
		getFunctionName() {
			return "POW";
		}
		
	}

}

import {CALC as calc} from "./abstract_expression";

export namespace CALC.interpreter.expression {

	import AbstractExpression = calc.interpreter.expression.AbstractExpression;

	export abstract class AbstractFunctionExpression extends AbstractExpression {
		
		constructor() {
			super();
		}
	
		protected abstract getFunctionName(): string;
		
	}

}

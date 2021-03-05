import {CALC as calc} from "./expression/abstract_expression";

export namespace CALC.visitor {

	import AbstractExpression = calc.visitor.expression.AbstractExpression;

	export abstract class AbstractVisitor {
		
		constructor() {
			
		}
		
		abstract visit(expression: AbstractExpression): void;
		
	}

}

import {CALC as calc} from "../abstract_visitor";

export namespace CALC.visitor.expression {

	import AbstractVisitor = calc.visitor.AbstractVisitor;

	export abstract class AbstractExpression {
		
		constructor() {
			
		}
		
		abstract operate(): number;
		
		accept(v: AbstractVisitor): void {
			
		}
		
	}

}

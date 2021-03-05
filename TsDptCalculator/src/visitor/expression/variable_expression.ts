import {CALC as calc} from "./abstract_expression";
import {CALC as calc2} from "../abstract_visitor";

export namespace CALC.visitor.expression {

	import AbstractExpression = calc.visitor.expression.AbstractExpression;
	import AbstractVisitor = calc2.visitor.AbstractVisitor;
	
	export class VariableExpression extends AbstractExpression {

		private name: string;
		private value: number = 0;
		
		constructor(name: string) {
			super();
			
			this.name = name;
		}
	
		operate(): number {
			return this.value;
		}
		
		accept(v: AbstractVisitor): void {
			v.visit(this);
		}
		
		getName(): string {
			return this.name;
		}
		
		setValue(value: number): void {
			this.value = value;
		}
		
	}

}

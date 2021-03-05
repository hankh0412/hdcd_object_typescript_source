import {CALC as calc} from "./abstract_expression";

export namespace CALC.decorator {

	import AbstractExpression = calc.decorator.AbstractExpression;

	export class NumberExpression extends AbstractExpression {

		private value: number;
		
		constructor(value: number) {
			super();
			
			this.value = value;
		}
	
		operate(): number {
			return this.value;
		}
		
	}

}

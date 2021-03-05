import {CALC as calc} from "./abstract_expression";
import {CALC as calc2} from "../calc_context";

export namespace CALC.interpreter.expression {

	import AbstractExpression = calc.interpreter.expression.AbstractExpression;
	import CalcContext = calc2.interpreter.CalcContext;

	export class NumberExpression extends AbstractExpression {
		
		private value: number;

		constructor(value: number) {
			super();
			
			this.value = value;
		}
	
		operate(): number {
			return this.value;
		}
		
		parse(context: CalcContext): void {
			
		}
		
	}

}

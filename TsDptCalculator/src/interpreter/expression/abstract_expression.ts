import {CALC as calc} from "../calc_context";

export namespace CALC.interpreter.expression {

	import CalcContext = calc.interpreter.CalcContext;

	export abstract class AbstractExpression {
		
		constructor() {
			
		}
		
		abstract parse(context: CalcContext): void;
		
		abstract operate(): number;
		
	}

}

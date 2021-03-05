import {CALC as calc} from "./abstract_operation";
import {CALC as calc2} from "./abstract_operator";
import {CALC as calc3} from "./divide_operator";

export namespace CALC.factorymethod {

	import AbstractOperation = calc.factorymethod.AbstractOperation;
	import AbstractOperator = calc2.factorymethod.AbstractOperator;
	import DivideOperator = calc3.factorymethod.DivideOperator;

	export class DivideOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getOperator(): AbstractOperator {
			return new DivideOperator();
		}
		
	}

}

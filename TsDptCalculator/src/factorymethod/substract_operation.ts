import {CALC as calc} from "./abstract_operation";
import {CALC as calc2} from "./abstract_operator";
import {CALC as calc3} from "./substract_operator";

export namespace CALC.factorymethod {

	import AbstractOperation = calc.factorymethod.AbstractOperation;
	import AbstractOperator = calc2.factorymethod.AbstractOperator;
	import SubstractOperator = calc3.factorymethod.SubstractOperator;

	export class SubstractOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getOperator(): AbstractOperator {
			return new SubstractOperator();
		}
		
	}

}

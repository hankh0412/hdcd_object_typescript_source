import {CALC as calc} from "./abstract_operation";
import {CALC as calc2} from "./abstract_operator";
import {CALC as calc3} from "./add_operator";

export namespace CALC.factorymethod {

	import AbstractOperation = calc.factorymethod.AbstractOperation;
	import AbstractOperator = calc2.factorymethod.AbstractOperator;
	import AddOperator = calc3.factorymethod.AddOperator;

	export class AddOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getOperator(): AbstractOperator {
			return new AddOperator();
		}
		
	}

}

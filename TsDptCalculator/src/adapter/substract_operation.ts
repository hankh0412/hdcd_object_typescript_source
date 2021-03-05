import {CALC as calc} from "./abstract_operation_target";

export namespace CALC.adapter {

	import AbstractOperationTarget = calc.adapter.AbstractOperationTarget;

	export class SubstractOperation extends AbstractOperationTarget {
		
		constructor() {
			super();
		}
	
		operate(firstNumber: number, secondNumber: number): number {
			return firstNumber - secondNumber;
		}
		
	}

}

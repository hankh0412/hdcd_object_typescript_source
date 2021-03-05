import {CALC as calc} from "./abstract_operation_target";
import {CALC as calc2} from "./operation_adaptee";

export namespace CALC.adapter {

	import AbstractOperationTarget = calc.adapter.AbstractOperationTarget;
	import OperationAdaptee = calc2.adapter.OperationAdaptee;

	export class DivideOperationAdapter extends AbstractOperationTarget {

		private operationAdaptee: OperationAdaptee;
	
		constructor(operationAdaptee: OperationAdaptee) {
			super();
			
			this.operationAdaptee = operationAdaptee;
		}
	
		operate(firstNumber: number, secondNumber: number): number {
			return this.operationAdaptee.calculate(OperationAdaptee.DIVIDE_OPERATION, firstNumber, secondNumber);
		}
		
	}

}

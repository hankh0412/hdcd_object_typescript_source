import {CALC as calc} from "./abstract_operation_subject";

export namespace CALC.proxy {

	import AbstractOperationSubject = calc.proxy.AbstractOperationSubject;

	export class AddOperationSubject extends AbstractOperationSubject {
		
		constructor() {
			super();
		}
		
		operate(firstNumber: number, secondNumber: number): number {
			return firstNumber + secondNumber;
		}
		
	}

}

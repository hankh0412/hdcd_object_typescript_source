import {CALC as calc} from "./abstract_operation_subject";

export namespace CALC.proxy {

	import AbstractOperationSubject = calc.proxy.AbstractOperationSubject;

	export class DivideOperationProxy extends AbstractOperationSubject {

		private realOperationSubject: AbstractOperationSubject;
		
		constructor(realOperationSubject: AbstractOperationSubject) {
			super();
			
			this.realOperationSubject = realOperationSubject;
		}
	
		operate(firstNumber: number, secondNumber: number): number {
			if (secondNumber === 0) {
				throw new Error("NonZeroDivideException");
			}
	
			return this.realOperationSubject.operate(firstNumber, secondNumber);
		}
		
	}

}

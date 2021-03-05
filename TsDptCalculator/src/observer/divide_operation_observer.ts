import {CALC as calc} from "./abstract_operation_observer";
import {CALC as calc2} from "./operation_subject";

export namespace CALC.observer {

	import AbstractOperationObserver = calc.observer.AbstractOperationObserver;
	import OperationSubject = calc2.observer.OperationSubject;

	export class DivideOperationObserver extends AbstractOperationObserver {
		
		constructor(operationSubject: OperationSubject) {
			super(operationSubject);
		}
	
		update(): void {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
	
			let answer = firstNumber / secondNumber;
	
			console.log(firstNumber + " / " + secondNumber + " = " + answer);
		}
		
	}

}

import {CALC as calc} from "./operation_subject";

export namespace CALC.observer {

	import OperationSubject = calc.observer.OperationSubject;

	export abstract class AbstractOperationObserver {
		
		private operationSubject: OperationSubject;

		constructor(operationSubject: OperationSubject) {
			this.operationSubject = operationSubject;
		}
		
		abstract update(): void;
		
		getFirstNumber(): number {
			return this.operationSubject.getFirstNumber();
		}
		
		getSecondNumber(): number {
			return this.operationSubject.getSecondNumber();
		}
		
	}

}

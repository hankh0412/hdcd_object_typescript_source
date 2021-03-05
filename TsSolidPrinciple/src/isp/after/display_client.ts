import {CALC as calc} from "./idisplayable";
import {CALC as calc2} from "./abstract_operation";

export namespace CALC.isp.after {

	import IDisplayable = calc.isp.after.IDisplayable;
	import AbstractOperation = calc2.isp.after.AbstractOperation;

	export class DisplayClient {
		
		constructor() {
			
		}
		
		request(displayable: IDisplayable, operation: AbstractOperation, firstNumber: number, secondNumber: number): void {
			displayable.display(operation, firstNumber, secondNumber);
		}
			
		toString() {
		    return "DisplayClient";
		}
		
	}

}

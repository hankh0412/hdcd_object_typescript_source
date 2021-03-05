import {CALC as calc} from "./add_operation";
import {CALC as calc2} from "./substract_operation";
import {CALC as calc3} from "./multiply_operation";

export namespace CALC.sip.after {

	import AddOperation = calc.sip.after.AddOperation;
	import SubstractOperation = calc2.sip.after.SubstractOperation;
	import MultiplyOperation = calc3.sip.after.MultiplyOperation;
	
	export class Calculator {

		private addOperation: AddOperation;
		private substractOperation: SubstractOperation;
		private multiplyOperation: MultiplyOperation;
		
		constructor() {
			
		}
		
		calculate(operator: string, firstNumber: number, secondNumber: number): number {
			let answer = 0;
			
			if(operator === "+") {
				answer = this.addOperation.add(firstNumber, secondNumber);
			}
			else if(operator === "-") {
				answer = this.substractOperation.substract(firstNumber, secondNumber);
			}
			else if(operator === "*") {
				answer = this.multiplyOperation.multiply(firstNumber, secondNumber);
			}
			
			return answer;
		}
		
		setAddOperation(addOperation: AddOperation): void {
			this.addOperation = addOperation;
		}
		
		setSubstractOperation(substractOperation: SubstractOperation): void {
			this.substractOperation = substractOperation;
		}
		
		setMultiplyOperation(multiplyOperation: MultiplyOperation): void {
			this.multiplyOperation = multiplyOperation;
		}
		
		toString() {
		    return "Calculator";
		}
		
	}

}

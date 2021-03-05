import {CALC as calc} from "./add_operation";
import {CALC as calc2} from "./substract_operation";
import {CALC as calc3} from "./multiply_operation";

export namespace CALC.ocp.before {

	import AddOperation = calc.ocp.before.AddOperation;
	import SubstractOperation = calc2.ocp.before.SubstractOperation;
	import MultiplyOperation = calc3.ocp.before.MultiplyOperation;
	
	export class Calculator {

		private addOperation: AddOperation;
		private substractOperation: SubstractOperation;
		private multiplyOperation: MultiplyOperation;
		
		constructor() {
			
		}
		
		add(firstNumber: number, secondNumber: number): number {
			let answer = this.addOperation.operate(firstNumber, secondNumber);
			
			return answer;
		}
		
		substract(firstNumber: number, secondNumber: number): number {
			let answer = this.substractOperation.operate(firstNumber, secondNumber);
			
			return answer;
		}
		
		multiply(firstNumber: number, secondNumber: number): number {
			let answer = this.multiplyOperation.operate(firstNumber, secondNumber);
			
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

import {CALC as calc} from "./abstract_operation_product";

export namespace CALC.factory {

	import AbstractOperationProduct = calc.factory.AbstractOperationProduct;

	export class MultiplyOperationProduct extends AbstractOperationProduct {
		
		constructor() {
			super();
		}
	
		operate(firstNumber: number, secondNumber: number): void {
			let answer = firstNumber * secondNumber;
			
			console.log(firstNumber + " * " + secondNumber + " = " +  answer);
		}
		
	}

}


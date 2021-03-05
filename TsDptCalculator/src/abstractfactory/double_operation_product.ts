import {CALC as calc} from "./abstract_operation_product";

export namespace CALC.abstractfactory {

	import AbstractOperationProduct = calc.abstractfactory.AbstractOperationProduct;

	export class DoubleOperationProduct extends AbstractOperationProduct {
		
		constructor() {
			super();
		}
		
		print(): void {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
			
			console.log(firstNumber + " + " + secondNumber + " = " + this.add());
			console.log(firstNumber + " - " + secondNumber + " = " + this.substract());
			console.log(firstNumber + " * " + secondNumber + " = " + this.multiply());
			console.log(firstNumber + " / " + secondNumber + " = " + this.divide());
		}
		
	}

}

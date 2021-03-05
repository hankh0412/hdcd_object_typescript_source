import {CALC as calc} from "./abstract_number_operand_product";

export namespace CALC.abstractfactory {

	import AbstractNumberOperandProduct = calc.abstractfactory.AbstractNumberOperandProduct;

	export abstract class AbstractOperationProduct {

		private firstNumberOperandProduct: AbstractNumberOperandProduct;
		private secondNumberOperandProduct: AbstractNumberOperandProduct;
		
		constructor() {
			
		}
		
		abstract print(): void;
		
		setFirstNumberOperandProduct(firstNumberOperandProduct: AbstractNumberOperandProduct): void {
			this.firstNumberOperandProduct = firstNumberOperandProduct;
		}
		
		setSecondNumberOperandProduct(secondNumberOperandProduct: AbstractNumberOperandProduct): void {
			this.secondNumberOperandProduct = secondNumberOperandProduct;
		}
		
		add(): number {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
			
			return firstNumber + secondNumber;
		}
		
		divide(): number {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
			
			return firstNumber / secondNumber;
		}
		
		multiply(): number {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
			
			return firstNumber * secondNumber;
		}
		
		substract(): number {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
			
			return firstNumber - secondNumber;
		}
		
		getFirstNumber(): number {
			return this.firstNumberOperandProduct.getNumber();
		}
		
		getSecondNumber(): number {
			return this.secondNumberOperandProduct.getNumber();
		}
		
	}

}

import {CALC as calc} from "./abstract_operation_builder";

export namespace CALC.builder {

	import AbstractOperationBuilder = calc.builder.AbstractOperationBuilder;

	export class MultiplyOperationBuilder extends AbstractOperationBuilder {
	
		constructor (firstNumber: number, secondNumber: number) {
			super(firstNumber, secondNumber);
		}
	
		operate() {
		    return this.firstNumber * this.secondNumber;
		}
		
		toString() {
		    return "MultiplyOperationBuilder " + this.firstNumber + " " + this.secondNumber;
		}
		
		buildOperator() {
		    this.result += " * ";
		}
	}

}

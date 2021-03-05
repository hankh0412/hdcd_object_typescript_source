import {CALC as calc} from "./abstract_operation_builder";

export namespace CALC.builder {

	import AbstractOperationBuilder = calc.builder.AbstractOperationBuilder;

	export class AddOperationBuilder extends AbstractOperationBuilder {
	
		constructor (firstNumber: number, secondNumber: number) {
			super(firstNumber, secondNumber);
		}
	
		operate() {
		    return this.firstNumber + this.secondNumber;
		}
		
		toString() {
		    return "AddOperationBuilder " + this.firstNumber + " " + this.secondNumber;
		}
		
		buildOperator() {
		    this.result += " + ";
		}
	}

}

import {CALC as calc} from "./abstract_operation_builder";

export namespace CALC.builder {

	import AbstractOperationBuilder = calc.builder.AbstractOperationBuilder;

	export class OperationDirector {

		private builder: AbstractOperationBuilder;
		
		constructor(builder: AbstractOperationBuilder) {
		    this.builder = builder;
		}
		
		construct() {
			this.builder.buildFirstNumber();
			this.builder.buildOperator();
			this.builder.buildSecondNumber();		
			this.builder.buildAnswer();
			
			let result = this.builder.getResult();
			
			console.log(result);
		}
		
	}

}

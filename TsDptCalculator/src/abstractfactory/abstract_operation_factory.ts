import {CALC as calc} from "./abstract_operation_product";
import {CALC as calc2} from "./abstract_number_operand_product";

export namespace CALC.abstractfactory {

	import AbstractOperationProduct = calc.abstractfactory.AbstractOperationProduct;
	import AbstractNumberOperandProduct = calc2.abstractfactory.AbstractNumberOperandProduct;

	export abstract class AbstractOperationFactory {
		
		constructor() {
			
		}
		
		abstract createOperationProduct(): AbstractOperationProduct;
		
		abstract createNumberOperandProduct(value: string): AbstractNumberOperandProduct;
		
	}

}

import {CALC as calc} from "./abstract_operation_factory";
import {CALC as calc2} from "./integer_operation_product";
import {CALC as calc3} from "./integer_number_operand_product";
import {CALC as calc4} from "./abstract_operation_product";
import {CALC as calc5} from "./abstract_number_operand_product";

export namespace CALC.abstractfactory {

	import AbstractOperationFactory = calc.abstractfactory.AbstractOperationFactory;
	import AbstractOperationProduct = calc4.abstractfactory.AbstractOperationProduct;
	import IntegerOperationProduct = calc2.abstractfactory.IntegerOperationProduct;
	import AbstractNumberOperandProduct = calc5.abstractfactory.AbstractNumberOperandProduct;
	import IntegerNumberOperandProduct = calc3.abstractfactory.IntegerNumberOperandProduct;

	export class IntegerOperationFactory extends AbstractOperationFactory {
		
		constructor() {
			super();
		}
		
		createOperationProduct(): AbstractOperationProduct {
			return new IntegerOperationProduct();
		}
		
		createNumberOperandProduct(value: string): AbstractNumberOperandProduct {
			return new IntegerNumberOperandProduct(value);
		}
		
	}

}

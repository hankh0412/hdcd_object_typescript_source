import {CALC as calc} from "./abstract_operation_factory";
import {CALC as calc2} from "./double_operation_product";
import {CALC as calc3} from "./double_number_operand_product";
import {CALC as calc4} from "./abstract_operation_product";
import {CALC as calc5} from "./abstract_number_operand_product";

export namespace CALC.abstractfactory {

	import AbstractOperationFactory = calc.abstractfactory.AbstractOperationFactory;
	import AbstractOperationProduct = calc4.abstractfactory.AbstractOperationProduct;
	import DoubleOperationProduct = calc2.abstractfactory.DoubleOperationProduct;
	import AbstractNumberOperandProduct = calc5.abstractfactory.AbstractNumberOperandProduct;
	import DoubleNumberOperandProduct = calc3.abstractfactory.DoubleNumberOperandProduct;

	export class DoubleOperationFactory extends AbstractOperationFactory {
	
		constructor() {
			super();
		}
		
		createOperationProduct(): AbstractOperationProduct {
			return new DoubleOperationProduct();
		}
		
		createNumberOperandProduct(value: string): AbstractNumberOperandProduct {
			return new DoubleNumberOperandProduct(value);
		}
		
	}

}

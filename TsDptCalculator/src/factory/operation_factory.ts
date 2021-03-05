import {CALC as calc} from "./abstract_operation_product";

import {CALC as calc2} from "./add_operation_product";
import {CALC as calc3} from "./substract_operation_product";
import {CALC as calc4} from "./multiply_operation_product";
import {CALC as calc5} from "./divide_operation_product";

export namespace CALC.factory {

	import AbstractOperationProduct = calc.factory.AbstractOperationProduct;
	import AddOperationProduct = calc2.factory.AddOperationProduct;
	import SubstractOperationProduct = calc3.factory.SubstractOperationProduct;
	import MultiplyOperationProduct = calc4.factory.MultiplyOperationProduct;
	import DivideOperationProduct = calc5.factory.DivideOperationProduct;

	export class OperationFactory {
		
		constructor() {
			
		}
		
		createOperationProduct(operator: string): AbstractOperationProduct {
			if(operator === "+") {
				return new AddOperationProduct();
			}
			else if(operator === "-") {
				return new SubstractOperationProduct();
			}
			else if(operator === "*") {
				return new MultiplyOperationProduct();
			}
			else if(operator === "/") {
				return new DivideOperationProduct();
			}
		
			return null;
		}
		
	}

}


import {CALC as calc} from "./abstract_number_operand_product";

export namespace CALC.abstractfactory {

	import AbstractNumberOperandProduct = calc.abstractfactory.AbstractNumberOperandProduct;

	export class IntegerNumberOperandProduct extends AbstractNumberOperandProduct {
		
		constructor(value: string) {
			super(value);
		}
		
		getNumber(): number {
			let value = this.getValue();		
			return parseInt(value);
		}
		
	}

}

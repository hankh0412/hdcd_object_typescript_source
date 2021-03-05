export namespace CALC.facade {

	export class NumberOperand {

		private value: string;
			
		constructor(value: string) {
			this.value = value;
		}
		
		getNumber(): number {
			return parseInt(this.value, 10);
		}
		
	}

}

export namespace CALC.abstractfactory {

	export abstract class AbstractNumberOperandProduct {

		private value: string;
		
		constructor(value: string) {
			this.value = value;
		}
		
		abstract getNumber(): number;
		
		getValue(): string {
			return this.value;
		}
		
	}

}

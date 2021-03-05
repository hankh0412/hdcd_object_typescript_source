export namespace CALC.command {

	export class OperationCommandReceiver {

		private result: number = 0;
		
		constructor() {
			
		}
		
		getResult(): number {
			return this.result;
		}
		
		add(value: number): void {
			this.result += value;
		}
		
		substract(value: number): void {
			this.result -= value;
		}
		
		multiply(value: number): void {
			this.result *= value;
		}
		
		divide(value: number): void {
			this.result /= value;
		}
		
	}

}

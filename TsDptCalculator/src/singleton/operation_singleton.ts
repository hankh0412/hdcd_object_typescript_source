export namespace CALC.singleton {

	export class OperationSingleton {

		static ADD_OPERATION: number = 1;
		static SUBSTRACT_OPERATION: number = 2;
		static MULTIPLY_OPERATION: number = 3;
		static DIVIDE_OPERATION: number = 4;

		private static _instance: OperationSingleton;
	
		constructor() {
			if(OperationSingleton._instance) {
				return OperationSingleton._instance;
			}
			
			OperationSingleton._instance = this;
		}
		
		static getInstance(): OperationSingleton {
			if (!OperationSingleton._instance) {
				OperationSingleton._instance = new OperationSingleton();
			}
			
			return OperationSingleton._instance;
		}
		
		operate(operatorType: number, firstNumber: number, secondNumber: number): void {
			let answer = 0;
			let operator = null;
	
			switch (operatorType) {
			case OperationSingleton.ADD_OPERATION:
				answer = firstNumber + secondNumber;
				operator = "+";
				break;
			case OperationSingleton.SUBSTRACT_OPERATION:
				answer = firstNumber - secondNumber;
				operator = "-";
				break;
			case OperationSingleton.MULTIPLY_OPERATION:
				answer = firstNumber * secondNumber;
				operator = "*";
				break;
			case OperationSingleton.DIVIDE_OPERATION:
				answer = firstNumber / secondNumber;
				operator = "/";
				break;
			}
	
			let result = firstNumber + operator + secondNumber + " = " + answer;
	
			this.print(result);
		}
		
		print(result: string): void {
			console.log(result);
		}
		
	}
	
}

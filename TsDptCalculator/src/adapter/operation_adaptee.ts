export namespace CALC.adapter {

	export class OperationAdaptee {

		public static ADD_OPERATION = 1;
		public static SUBSTRACT_OPERATION = 2;
		public static MULTIPLY_OPERATION = 3;
		public static DIVIDE_OPERATION = 4;
		
		constructor() {
			
		}
		
		calculate(operatorType: number, firstNumber: number, secondNumber: number): number {
			switch (operatorType) {
				case OperationAdaptee.ADD_OPERATION:
					return firstNumber + secondNumber;
				case OperationAdaptee.SUBSTRACT_OPERATION:
					return firstNumber - secondNumber;
				case OperationAdaptee.MULTIPLY_OPERATION:
					return firstNumber * secondNumber;
				case OperationAdaptee.DIVIDE_OPERATION:
					return firstNumber / secondNumber;
			}
	
			return 0;
		}
		
	}

}

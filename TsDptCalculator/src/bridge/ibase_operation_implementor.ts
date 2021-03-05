export namespace CALC.bridge {

	export interface IBaseOperationImplementor {
		
		add(firstNumber: number, secondNumber: number): number;
		
		substract(firstNumber: number, secondNumber: number): number;
		
		multiply(firstNumber: number, secondNumber: number): number;
		
		divide(firstNumber: number, secondNumber: number): number;
	
	}
	
}

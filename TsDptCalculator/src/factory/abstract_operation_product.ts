export namespace CALC.factory {

	export class AbstractOperationProduct {
		
		constructor() {
			
		}
		
		operate(firstNumber: number, secondNumber: number): void {
			throw new Error("You have to implement the method doSomething!");
		}
		
	}

}



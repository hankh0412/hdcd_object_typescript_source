export namespace CALC.builder {

	export abstract class AbstractOperationBuilder {

		protected firstNumber: number;
		protected secondNumber: number;

		protected result: string = "";
		
		constructor(firstNumber: number, secondNumber: number) {
		    this.firstNumber = firstNumber;
		    this.secondNumber = secondNumber;
		}
		
		abstract operate(): number;
		
		toString() {
		    return "AbstractOperationBuilder " + this.firstNumber + " " + this.secondNumber;
		}
		
		getResult() {
		    return this.result;
		}
		
		buildFirstNumber() {
		    this.result += this.firstNumber;
		}
		
		buildSecondNumber() {
		    this.result += this.secondNumber;
		}
		
		buildAnswer() {
			let answer = this.operate();
			
		    this.result += " = " + answer;
		}
		
		buildOperator() {
			throw new Error("You have to implement the method doSomething!");
		}
	}

}

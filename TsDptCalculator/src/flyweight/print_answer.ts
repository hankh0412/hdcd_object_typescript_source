import {CALC as calc} from "./text_style_flyweight_factory";
import {CALC as calc2} from "./flyweight_constants";

export namespace CALC.flyweight {

	import TextStyleFlywieightFactory = calc.flyweight.TextStyleFlywieightFactory;
	import FlyweightConstants = calc2.flyweight.FlyweightConstants;

	export class PrintAnswer {

		private textStyleFlywieightFactory: TextStyleFlywieightFactory;
		private firstNumber: number = 0;
		private secondNumber: number = 0;
		
		constructor() {
			this.textStyleFlywieightFactory = TextStyleFlywieightFactory.getInstance();
		}
		
		printResult() {
			let answers = [0,0,0,0];
	
	        answers[0] = this.firstNumber + this.secondNumber;
	        answers[1] = this.firstNumber - this.secondNumber;
	        answers[2] = this.firstNumber * this.secondNumber;
	        answers[3] = this.firstNumber / this.secondNumber;
	
	        for(let i = 0; i < answers.length; i++) {
	            let operator = FlyweightConstants.OPERATORS[i];
	            let textArray = ["","","","",""];
	            textArray[0] = "" + this.firstNumber + this.getTextStyle(FlyweightConstants.NUMBER_STYLE_NAME);
	            textArray[1] = operator;
	            textArray[2] = "" + this.secondNumber + this.getTextStyle(FlyweightConstants.NUMBER_STYLE_NAME);
	            textArray[3] = FlyweightConstants.EQUAL_CHAR;
	            textArray[4] = "" + answers[i] + this.getTextStyle(FlyweightConstants.ANSWER_STYLE_NAME);
	
	            console.log(textArray[0],textArray[1],textArray[2],textArray[3],textArray[4]);
	        }
		}
		
		getTextStyle(name: string) {
			return this.textStyleFlywieightFactory.getTextStyleFlywieight(name);
		}
		
		setFirstNumber(firstNumber: number): void {
			this.firstNumber = firstNumber;
		}
		
		setSecondNumber(secondNumber: number): void {
			this.secondNumber = secondNumber;
		}
	    
	}

}

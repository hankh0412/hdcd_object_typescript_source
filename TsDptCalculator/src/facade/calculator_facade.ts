import {CALC as calc} from "../factory/operation_factory"
import {CALC as calc2} from "./number_operand";
import {CALC as calc3} from "./expression_parser";

export namespace CALC.facade {

	import OperationFactory = calc.factory.OperationFactory;
	import NumberOperand = calc2.facade.NumberOperand;
	import ExpressionParser = calc3.facade.ExpressionParser;

	export class CalculatorFacade {

		private expression: string;
		
		constructor() {
			
		}
		
		calculate(expression: string): void {
			let expressionParser: ExpressionParser = new ExpressionParser();
			expressionParser.parse(expression);
	
			let operatorToken: string = expressionParser.getOperatorToken();
	
			let firstNumberToken: string = expressionParser.getFirstNumberToken();
			let secondNumberToken: string = expressionParser.getSecondNumberToken();
	
			let firstNumberOperand: NumberOperand = new NumberOperand(firstNumberToken);
			let secondNumberOperand: NumberOperand = new NumberOperand(secondNumberToken);
	
			let firstNumber: number = firstNumberOperand.getNumber();
			let secondNumber: number = secondNumberOperand.getNumber();
	
			let operationFactory = new OperationFactory();
			let operationProduct = operationFactory.createOperationProduct(operatorToken);
	
			operationProduct.operate(firstNumber, secondNumber);
		}
		
	}

}


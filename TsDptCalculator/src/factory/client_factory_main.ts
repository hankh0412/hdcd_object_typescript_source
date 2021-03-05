import {CALC as calc} from "./operation_factory"

let operationFactory = new calc.factory.OperationFactory();
		
let firstNumber: number = 100;
let secondNumber: number = 20;

const operators: string[] = ["+", "-", "*", "/"];

for(let operator of operators){
	let operationProduct = operationFactory.createOperationProduct(operator);				
	operationProduct.operate(firstNumber, secondNumber);
}

import {CALC as calc} from "./operation_context";
import {CALC as calc2} from "./add_operation_strategy";
import {CALC as calc3} from "./substract_operation_strategy";
import {CALC as calc4} from "./multiply_operation_strategy";
import {CALC as calc5} from "./divide_operation_strategy";


let operationContext = new calc.strategy.OperationContext();
	
let firstNumber = 100;
let secondNumber = 20;

const operationStrategies = [
		new calc2.strategy.AddOperationStrategy(), 
		new calc3.strategy.SubstractOperationStrategy(),
		new calc4.strategy.MultiplyOperationStrategy(), 
		new calc5.strategy.DivideOperationStrategy() ];

for (let operationStrategy of operationStrategies) {
	operationContext.setOperationStrategy(operationStrategy);
	operationContext.operate(firstNumber, secondNumber);
}

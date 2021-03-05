import {CALC as calc} from "./operation_aggregate";
import {CALC as calc2} from "./add_operation";
import {CALC as calc3} from "./substract_operation";
import {CALC as calc4} from "./multiply_operation";
import {CALC as calc5} from "./divide_operation";

let operationAggregate = new calc.iterator.OperationAggregate();
	
operationAggregate.addOperation(new calc2.iterator.AddOperation());
operationAggregate.addOperation(new calc3.iterator.SubstractOperation());
operationAggregate.addOperation(new calc4.iterator.MultiplyOperation());
operationAggregate.addOperation(new calc5.iterator.DivideOperation());

let firstNumber = 100;
let secondNumber = 20;

let calcIterator = operationAggregate.createIterator();

while (calcIterator.hasNext()) {
	let operation = calcIterator.next();
	operation.print(firstNumber, secondNumber);
}

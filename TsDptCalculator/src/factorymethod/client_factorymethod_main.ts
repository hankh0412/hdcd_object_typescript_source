import {CALC as calc} from "./add_operation";
import {CALC as calc2} from "./substract_operation";
import {CALC as calc3} from "./multiply_operation";
import {CALC as calc4} from "./divide_operation";

let firstNumber = 100;
let secondNumber = 20;

const operations = [ new calc.factorymethod.AddOperation(),
		new calc2.factorymethod.SubstractOperation(), new calc3.factorymethod.MultiplyOperation(),
		new calc4.factorymethod.DivideOperation() ];

for (let operation of operations) {
	operation.setFirstNumber(firstNumber);
	operation.setSecondNumber(secondNumber);

	operation.operate();
}

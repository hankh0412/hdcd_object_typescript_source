import {CALC as calc} from "./add_operation_builder";
import {CALC as calc2} from "./substract_operation_builder";
import {CALC as calc3} from "./multiply_operation_builder";
import {CALC as calc4} from "./divide_operation_builder";
import {CALC as calc5} from "./operation_director";

let firstNumber = 100,
secondNumber = 20;
let operationDirector = null;

let operationBuilders = [];

operationBuilders[0] = new calc.builder.AddOperationBuilder(firstNumber, secondNumber);
operationBuilders[1] = new calc2.builder.SubstractOperationBuilder(firstNumber, secondNumber);
operationBuilders[2] = new calc3.builder.MultiplyOperationBuilder(firstNumber, secondNumber);
operationBuilders[3] = new calc4.builder.DivideOperationBuilder(firstNumber, secondNumber);

for (let operationBuilder of operationBuilders) {
    operationDirector = new calc5.builder.OperationDirector(operationBuilder);
    operationDirector.construct();
}

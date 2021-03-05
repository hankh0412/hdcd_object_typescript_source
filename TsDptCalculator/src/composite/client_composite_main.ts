import {CALC as calc} from "./calculator";
import {CALC as calc2} from "./number_expression";
import {CALC as calc3} from "./add_operation_expression";
import {CALC as calc4} from "./substract_operation_expression";
import {CALC as calc5} from "./multiply_operation_expression";
import {CALC as calc6} from "./divide_operation_expression";

let calculator = new calc.composite.Calculator();
	
let firstNumber = 100;
let secondNumber = 20;

let firstNumberEquation = new calc2.composite.NumberExpression(firstNumber);

calculator.setExpression(firstNumberEquation);
console.log("firstNumber = " + calculator.calculate());

let secondNumberEquation = new calc2.composite.NumberExpression(secondNumber);

calculator.setExpression(secondNumberEquation);
console.log("secondNumber = " + calculator.calculate());

let addOperationExpression = new calc3.composite.AddOperationExpression();
addOperationExpression.addOperandExpression(firstNumberEquation);
addOperationExpression.addOperandExpression(secondNumberEquation);

calculator.setExpression(addOperationExpression);
console.log(firstNumber + " + " + secondNumber + " = " + calculator.calculate());

let substractOperationExpression = new calc4.composite.SubstractOperationExpression();
substractOperationExpression.addOperandExpression(firstNumberEquation);
substractOperationExpression.addOperandExpression(secondNumberEquation);

calculator.setExpression(substractOperationExpression);
console.log(firstNumber + " - " + secondNumber + " = " + calculator.calculate());

let multiplyOperationExpression = new calc5.composite.MultiplyOperationExpression();
multiplyOperationExpression.addOperandExpression(firstNumberEquation);
multiplyOperationExpression.addOperandExpression(secondNumberEquation);

calculator.setExpression(multiplyOperationExpression);
console.log(firstNumber + " * " + secondNumber + " = " + calculator.calculate());

let divideOperationExpression = new calc6.composite.DivideOperationExpression();
divideOperationExpression.addOperandExpression(firstNumberEquation);
divideOperationExpression.addOperandExpression(secondNumberEquation);

calculator.setExpression(divideOperationExpression);
console.log(firstNumber + " / " + secondNumber + " = " + calculator.calculate());

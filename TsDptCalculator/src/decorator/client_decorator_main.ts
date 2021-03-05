import {CALC as calc} from "./calculator";
import {CALC as calc2} from "./number_expression";
import {CALC as calc3} from "./add_operation_expression";
import {CALC as calc4} from "./sqrt_decorator_expression";
import {CALC as calc5} from "./frac_decorator_expression";
import {CALC as calc6} from "./pow_decorator_expression";

let calculator = new calc.decorator.Calculator();
	
let firstNumber = 100;
let secondNumber = 20;

let firstNumberEquation = new calc2.decorator.NumberExpression(firstNumber);

calculator.setExpression(firstNumberEquation);		
console.log("firstNumber = " + calculator.calculate());

let secondNumberEquation = new calc2.decorator.NumberExpression(secondNumber);

calculator.setExpression(secondNumberEquation);		
console.log("secondNumber = " + calculator.calculate());

let addOperatorEquation = new calc3.decorator.AddOperationExpression();
addOperatorEquation.addOperandExpression(firstNumberEquation);
addOperatorEquation.addOperandExpression(secondNumberEquation);

calculator.setExpression(addOperatorEquation);		
console.log(firstNumber + " + " + secondNumber + " = " + calculator.calculate());
		
calculator.setExpression(new calc4.decorator.SqrtDecoratorExpression(addOperatorEquation));		
console.log("SQRT(" + firstNumber + " + " + secondNumber + ") = " + calculator.calculate());

calculator.setExpression(new calc5.decorator.FracDecoratorExpression(addOperatorEquation));		
console.log("FRAC(" + firstNumber + " + " + secondNumber + ") = " + calculator.calculate());

let exponent = 2;
calculator.setExpression(new calc6.decorator.PowDecoratorExpression(addOperatorEquation, exponent));		
console.log("POW(" + firstNumber + " + " + secondNumber + ") = " + calculator.calculate());

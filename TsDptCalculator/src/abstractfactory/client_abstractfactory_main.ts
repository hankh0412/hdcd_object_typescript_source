import {CALC as calc} from "./integer_operation_factory";
import {CALC as calc2} from "./double_operation_factory";
		
let firstNumber = "10.3";
let secondNumber = "20.2";

let operationFactory = new calc.abstractfactory.IntegerOperationFactory();

let operationProduct = operationFactory.createOperationProduct();	

let firstNumberOperandProduct = operationFactory.createNumberOperandProduct(firstNumber);
let secondNumberOperandProduct = operationFactory.createNumberOperandProduct(secondNumber);

operationProduct.setFirstNumberOperandProduct(firstNumberOperandProduct);
operationProduct.setSecondNumberOperandProduct(secondNumberOperandProduct);

operationProduct.print();
	
operationFactory = new calc2.abstractfactory.DoubleOperationFactory();

operationProduct = operationFactory.createOperationProduct();	

firstNumberOperandProduct = operationFactory.createNumberOperandProduct(firstNumber);
secondNumberOperandProduct = operationFactory.createNumberOperandProduct(secondNumber);

operationProduct.setFirstNumberOperandProduct(firstNumberOperandProduct);
operationProduct.setSecondNumberOperandProduct(secondNumberOperandProduct);

operationProduct.print();

import {CALC as calc} from "./add_operation_handler";
import {CALC as calc2} from "./substract_operation_handler";
import {CALC as calc3} from "./multiply_operation_handler";
import {CALC as calc4} from "./divide_operation_handler";
import {CALC as calc5} from "./request";
	
let addOperationHandler = new calc.chain.AddOperationHandler("+");
let substractOperationHandler = new calc2.chain.SubstractOperationHandler("-");
let multiplyOperationHandler = new calc3.chain.MultiplyOperationHandler("*");
let divideOperationHandler = new calc4.chain.DivideOperationHandler("/");

addOperationHandler.setNext(substractOperationHandler)
		.setNext(multiplyOperationHandler)
		.setNext(divideOperationHandler);

let requests = [ new calc5.chain.Request("100+20"), new calc5.chain.Request("100-20"),
		new calc5.chain.Request("100*20"), new calc5.chain.Request("100/20") ];

for (let request of requests) {
	let answer = addOperationHandler.handleRequest(request);
	let expression = request.getExpression();

	console.log(expression + " = " + answer);
}

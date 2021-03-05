import {CALC as calc} from "./operation_command_receiver";
import {CALC as calc2} from "./add_operation_command";
import {CALC as calc3} from "./substract_operation_command";
import {CALC as calc4} from "./multiply_operation_command";
import {CALC as calc5} from "./divide_operation_command";

let receiver = new calc.command.OperationCommandReceiver();
		
let result = receiver.getResult();

console.log("result = " + result);

let addCommand = new calc2.command.AddOperationCommand(receiver, 20);
addCommand.execute();

result = receiver.getResult();
console.log("result + 20 = " + result);

let substractCommand = new calc3.command.SubstractOperationCommand(receiver, 10);
substractCommand.execute();

result = receiver.getResult();
console.log("result - 10 = " + result);

let multiplyCommand = new calc4.command.MultiplyOperationCommand(receiver, 10);
multiplyCommand.execute();

result = receiver.getResult();
console.log("result * 10 = " + result);

let divideCommand = new calc5.command.DivideOperationCommand(receiver, 10);
divideCommand.execute();

result = receiver.getResult();
console.log("result / 10 = " + result);

import {CALC as calc} from "./abstract_operation_command";
import {CALC as calc2} from "./operation_command_receiver";

export namespace CALC.command {

	import AbstractOperationCommand = calc.command.AbstractOperationCommand;
	import OperationCommandReceiver = calc2.command.OperationCommandReceiver;

	export class DivideOperationCommand extends AbstractOperationCommand {
		
		constructor(receiver: OperationCommandReceiver, value: number) {
			super(receiver, value);
		}
	
		execute(): void {
			this.receiver.divide(this.value);
		}
		
	}

}

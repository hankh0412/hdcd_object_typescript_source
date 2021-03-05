export namespace PAINTER.model.piece {

	export abstract class AbstractPiece {

		protected strokeColor: string;
		protected strokeWidth: number;

		protected fillColor: string;
		
		constructor() {
			this.strokeColor = "red";
			this.strokeWidth = 10;
	
			this.fillColor = "blue";
		}
		
		abstract draw(ctx: any): void;
			
		toString(): string {
		    return "AbstractPiece";
		}
		
	}

}

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

		//Change_Start
		setStrokeColor(strokeColor: string): void {
			this.strokeColor = strokeColor;
		}
		
		setStrokeWidth(strokeWidth: number): void {
			this.strokeWidth = strokeWidth;
		}
		
		setFillColor(fillColor: string): void {
			this.fillColor = fillColor;
		}
		//Change_End
		
		//Change_Start
		applyStyle(ctx: any): void {
			ctx.lineWidth = this.strokeWidth;
			ctx.strokeStyle = this.strokeColor;
			ctx.fillStyle = this.fillColor;
		}
		//Change_End
			
		toString(): string {
		    return "AbstractPiece";
		}
		
	}

}

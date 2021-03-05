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

		setStrokeColor(strokeColor: string): void {
			this.strokeColor = strokeColor;
		}
		
		setStrokeWidth(strokeWidth: number): void {
			this.strokeWidth = strokeWidth;
		}
		
		setFillColor(fillColor: string): void {
			this.fillColor = fillColor;
		}
		
		applyStyle(ctx: any): void {
			ctx.lineWidth = this.strokeWidth;
			ctx.strokeStyle = this.strokeColor;
			ctx.fillStyle = this.fillColor;
		}
			
		toString(): string {
		    return "AbstractPiece";
		}
		
	}

}

export namespace PAINTER.model.piece {

	export class RectanglePiece {

		private strokeColor: string;
		private strokeWidth: number;

		private fillColor: string;

		private x: number;
		private y: number;
		private width: number;
		private height: number;
		
		constructor(x: number, y: number, width: number, height: number) {
			this.strokeColor = "red";
			this.strokeWidth = 10;
	
			this.fillColor = "blue";
			
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
		}
	
		drawRect(ctx: any): void {
		    ctx.lineWidth = this.strokeWidth;
			ctx.strokeStyle = this.strokeColor;
			ctx.fillStyle = this.fillColor;
			
			ctx.fillRect(this.x, this.y, this.width, this.height);
			
			ctx.strokeRect(this.x, this.y, this.width, this.height);
		}
		
		toString(): string {
		    return "RectanglePiece";
		}
		
	}

}

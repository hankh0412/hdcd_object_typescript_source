import {PAINTER as pntr} from "./abstract_piece";

export namespace PAINTER.model.piece {

	//Change_Start
	import AbstractPiece = pntr.model.piece.AbstractPiece;
	//Change_End

	//Change_Start
	export class EllipsePiece extends AbstractPiece {
	//Change_End

		//Change_Start_DEL
		/*
		private strokeColor: string;
		private strokeWidth: number;

		private fillColor: string;
		*/
		//Change_End

		private x: number;
		private y: number;
		private width: number;
		private height: number;
		
		constructor(x: number, y: number, width: number, height: number) {
			//Change_Start_DEL
			/*
			this.strokeColor = "green";
			this.strokeWidth = 10;
	
			this.fillColor = "yellow";
			*/
			//Change_End

			//Change_Start
			super();
			//Change_End
			
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
		}
	
		//Change_Start_DEL
		/*
		drawEllipse(ctx: any) {
			ctx.lineWidth = this.strokeWidth;
			ctx.strokeStyle = this.strokeColor;
			ctx.fillStyle = this.fillColor;
			
			this.drawEllipseByBezierCurve(ctx, this.x, this.y, this.width, this.height);
		}
		*/
		//Change_End

		//Change_Start
		draw(ctx: any) {
			ctx.lineWidth = this.strokeWidth;
			ctx.strokeStyle = this.strokeColor;
			ctx.fillStyle = this.fillColor;
			
			this.drawEllipseByBezierCurve(ctx, this.x, this.y, this.width, this.height);
		}
		//Change_End
		
		drawEllipseByBezierCurve(ctx: any, x: number, y: number, w: number, h: number) {
			let kappa = .5522848,
		      ox = (w / 2) * kappa, 
		      oy = (h / 2) * kappa, 
		      xe = x + w, 
		      ye = y + h,
		      xm = x + w / 2,
		      ym = y + h / 2;
	
			ctx.beginPath();
			ctx.moveTo(x, ym);
			ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
			ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
			ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
			ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
			  
			ctx.fill();
			  
			ctx.stroke();
		}
		
		toString() {
		    return "EllipsePiece";
		}
	
	}

}

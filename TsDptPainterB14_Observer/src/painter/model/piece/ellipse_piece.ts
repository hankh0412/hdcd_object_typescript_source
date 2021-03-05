import {PAINTER as pntr} from "./abstract_piece";

export namespace PAINTER.model.piece {

	import AbstractPiece = pntr.model.piece.AbstractPiece;

	export class EllipsePiece extends AbstractPiece {
	
		private x: number;
		private y: number;
		private width: number;
		private height: number;
		
		constructor(x: number, y: number, width: number, height: number) {
			super();
			
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
		}
	
		draw(ctx: any): void {
			this.applyStyle(ctx);
			
			EllipsePiece.drawEllipseByBezierCurve(ctx, this.x, this.y, this.width, this.height);
		}
		
		static drawEllipseByBezierCurve(ctx: any, x: number, y: number, w: number, h: number): void {
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

export namespace PAINTER.app {

	export class PainterConstants {

		public static PAINTER_TITLE = "Painter";
	
		public static PAINTER_WIDTH = 600;
		public static PAINTER_HEIGHT = 400;

		//Change_Start_DEL
		/*
		public static LINE = Symbol("line");
		public static RECTANGLE = Symbol("rectangle");
		public static ELLIPSE = Symbol("ellipse");
		public static FREE_PATH = Symbol("free_path");
		*/
		//Change_End
		
		constructor() {
		    
		}
		
		toString(): string {
		    return "PainterConstants";
		}
		
	}

}

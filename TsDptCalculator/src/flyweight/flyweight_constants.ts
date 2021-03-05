import {CALC as calc} from "./font_info";

export namespace CALC.flyweight {

	import FontInfo = calc.flyweight.FontInfo;

	export class FlyweightConstants {

		public static NUMBER_STYLE_NAME: string = "number";
		public static ANSWER_STYLE_NAME: string = "answer";
		
		public static COLUMN_WIDTH: number = 50;
		public static ROW_HEIGHT: number = 50;
		
		public static OPERATORS: string[] = [ "+", "-", "*", "/" ];
		public static EQUAL_CHAR: string = "=";
		
		public static DEFAULT_NUMBER_FONT_INFO: FontInfo = new FontInfo("Times",18);
		public static DEFAULT_ANSWER_FONT_INFO: FontInfo = new FontInfo("Times",26);
		
		constructor() {
			
		}
		
	}
	
	

}

import {CALC as calc} from "./font_info";

export namespace CALC.flyweight {

	import FontInfo = calc.flyweight.FontInfo;

	export class TextStyleFlywieight {

		private fontInfo: FontInfo;
		private color: string;
		
		constructor(fontInfo: FontInfo, color: string) {
	        this.fontInfo = fontInfo;
	        this.color = color;
		}
		
		getFont() {
			return this.fontInfo;
		}
		
		getColor() {
			return this.color;
		}
		
		toString() {
		    	return "(" + this.fontInfo.toString() + "," + this.color + ")";
		}
		
	}

}

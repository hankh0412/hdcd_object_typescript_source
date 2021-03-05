import {CALC as calc} from "./text_style_flyweight";

export namespace CALC.flyweight {

	import TextStyleFlywieight = calc.flyweight.TextStyleFlywieight;

	export class TextStyleFlywieightFactory {

		private static _instance: TextStyleFlywieightFactory;

		private pool: Map<string, TextStyleFlywieight>;
		
		constructor() {
			if(TextStyleFlywieightFactory._instance) {
				return TextStyleFlywieightFactory._instance;
			}
			
			TextStyleFlywieightFactory._instance = this;
			
			this.pool = new Map();
		}
		
		static getInstance() {
			if (!TextStyleFlywieightFactory._instance) {
				TextStyleFlywieightFactory._instance = new TextStyleFlywieightFactory();
			}
			
			return TextStyleFlywieightFactory._instance;
		}
		
		getTextStyleFlywieight(name: string) {
			let textStyle = this.pool.get(name);
	        return textStyle;
		}
		
		putTextStyleFlywieight(name: string, textStyle: TextStyleFlywieight) {
			this.pool.set(name, textStyle);
		} 
		
	}

}

import {CALC as calc} from "./text_style_flyweight_factory";
import {CALC as calc2} from "./flyweight_constants";
import {CALC as calc3} from "./text_style_flyweight";

export namespace CALC.flyweight {

	import TextStyleFlywieightFactory = calc.flyweight.TextStyleFlywieightFactory;
	import FlyweightConstants = calc2.flyweight.FlyweightConstants;
	import TextStyleFlywieight = calc3.flyweight.TextStyleFlywieight;

	export class Client {
		
		constructor() {
	        
		}
		
		setupTextStyleFlyweightFactory() {
			
			let textStyleFlywieightFactory = TextStyleFlywieightFactory.getInstance();
	
	        let name = FlyweightConstants.NUMBER_STYLE_NAME;
	        let textStyle = new TextStyleFlywieight(FlyweightConstants.DEFAULT_NUMBER_FONT_INFO, "red");
	        textStyleFlywieightFactory.putTextStyleFlywieight(name, textStyle);
	        
	        name = FlyweightConstants.ANSWER_STYLE_NAME;
	        textStyle = new TextStyleFlywieight(FlyweightConstants.DEFAULT_ANSWER_FONT_INFO, "black");
	        textStyleFlywieightFactory.putTextStyleFlywieight(name, textStyle);
		}
		
	}

}

import {CALC as calc} from "./client";

let client = new calc.state.Client();
	    
client.action("5");
client.action("5");
client.action("*");
client.action("6");
client.action("=");

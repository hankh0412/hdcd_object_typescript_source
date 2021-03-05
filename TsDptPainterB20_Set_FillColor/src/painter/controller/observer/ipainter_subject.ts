import {PAINTER as pntr} from "./ipainter_observer";

export namespace PAINTER.controller.observer {

	import IPainterObserver = pntr.controller.observer.IPainterObserver;

	export interface IPainterSubject {
		
		notifyObservers(): void;
		
		registerObserver(oberver: IPainterObserver): void;
		
		removeObserver(oberver: IPainterObserver): void;
		
	}

}

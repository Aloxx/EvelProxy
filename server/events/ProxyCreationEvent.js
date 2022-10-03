import { Event } from "../../types/event.js";

export class ProxyCreationEvent {
    constructor() {
        this.type = Event.ProxyCreationEvent;
    }

    call(data , callback) {
        if(data.proxy.settings.debugger) console.log('[EvelProxy/ProxyCreationEvent] Event Happened');

        if(callback != null) callback();
    }
}
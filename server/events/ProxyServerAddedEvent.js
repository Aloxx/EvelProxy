import { Event } from "../../types/event.js";

export class ProxyServerAddedEvent {
    constructor() {
        this.type = Event.ProxyServerAddedEvent;
    }

    call(data , callback) {
        if(data.proxy.settings.debugger) console.log('[EvelProxy/ProxyServerAddedEvent] Event Happened');

        if(callback != null) callback();
    }
}
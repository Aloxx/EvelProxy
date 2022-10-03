import { ProxyCreationEvent } from "./events/ProxyCreationEvent.js";

export class EventBus {
    constructor(proxy = null) {
        this.proxy = proxy;

        this.trigger(new ProxyCreationEvent(), {proxy: this.proxy});
    }

    trigger(event, data = {} , callback = null) {
        if(event != null) {
            event.call(data,callback);
        }
    }
}
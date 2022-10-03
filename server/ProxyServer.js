import { ProxyEvents } from "../types/proxyEvents.js";
import { ProxyServerAddedEvent } from "./events/ProxyServerAddedEvent.js";
import { Listeners } from "./Listeners.js";
import { MessagingService } from "./messaging/Service.js";

export class ProxyServer{
    constructor(proxy,socketServer, params = {}) {
        this.proxy = proxy;
        this.socketServer = socketServer;
        this.params = params;

        this.proxy.event_bus.trigger(new ProxyServerAddedEvent, { proxy: this.proxy});

        this.sid = this.params.sid;

        this.listeners = new Listeners();

        this.messagingService = new MessagingService();

        /*
        PACKET EVENT TYPES:
         0 - receive JSON
         1 - receive MSGPACK
         2 - receive another
         3 - receive unknown
        */
        this.socketServer.addListener("connection", (socket) => {
          
            socket.on("message", (raw_data) => {
                this.callEvent(ProxyEvents.PacketEvent, {
                   getEventType: () => { return 0 },
                   getRawData: () => { return raw_data },
                   getMessage:() => { return raw_data },
                   getSender: () => {return socket }
                })
            })
            
        })
    }

    on(eventName , callback) {
        switch(eventName) {
            case "ProtocolEvent":
                this.listeners.registerListener(ProxyEvents.ProtocolEvent, callback);
            break;
            case "PacketEvent":
                this.listeners.registerListener(ProxyEvents.PacketEvent, callback);
            break;
        }
    }

    callEvent(eventID, data = {}) {
        this.listeners.onEventHappened(eventID , data);
    }
}
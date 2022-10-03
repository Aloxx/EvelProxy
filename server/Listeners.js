

export class Listeners {
    constructor() {

        this.listeners = [
            [], // ProxyListener
            [] // PacketListener
        ]
    }

    registerListener(uid, callback) {
        this.listeners[uid].push(callback);
    }
    onEventHappened(eventID , data){
        for(let i = 0; i < this.listeners[eventID].length; i++) {
            this.listeners[eventID][i](data);
        }
    }
}
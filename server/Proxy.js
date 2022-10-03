import { Constants } from "../constants.js";
import { EventBus } from "./EventBus.js";
export class EvelProxy {
    constructor (project_settings = {}) { 
        this.settings = project_settings;
        this.servers = new Array();

        this.event_bus = new EventBus(this);

        this.proxy_servers = [];

        this.repeatingTasks = new Map();
     
    }

    addServer(proxyServer) {
       if(this.servers.length < Constants.MAX_PROXY_SERVERS) this.servers.push(proxyServer);
       else if(this.settings.debugger) console.warn(`[EvelProxy/ServerAdapter] Server ${proxyServer.sid} couldn't be added due to Server Limit`);

    }

    setRepeatingTask() {
        
    }
}
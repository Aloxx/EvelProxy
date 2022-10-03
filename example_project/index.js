import { WebSocketServer } from "ws";
import { EvelProxy } from "../server/Proxy.js";
import { ProxyServer } from "../server/ProxyServer.js";
import { ProxyEvents } from "../types/proxyEvents.js";

const ws = new WebSocketServer({
    port: 8080
})
//ws.addListener("co")

const proxy = new EvelProxy({
    debugger: true
});

const proxyServer = new ProxyServer(proxy , ws , {
    sid: 1
});

proxy.addServer(proxyServer);


proxyServer.messagingService.packetSecurityType = "rotatedA";
proxyServer.messagingService.createProtectionQuery();

proxyServer.on('ProtocolEvent' , (event) => {
    console.log(`ProtocolEvents/Happened: ` + event.name);
});

proxyServer.on('PacketEvent' , (event) => {
   
    let event_type = event.getEventType(),
          message_data = event.getMessage();

          if(typeof message_data == "object") message_data = JSON.parse(message_data);
    
    console.log(`[EvelProxyServer/PacketEvent] event_type: ${event_type} message_data: ${message_data}`)
});



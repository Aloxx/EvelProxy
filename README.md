# EvelProxy
WebSocket based Advanced Java-Script multiple-server solution

# Why i need it?
Some developers, when creating their web servers / games based on WebSocket, face such problems as: Connect servers to each other, Protect ( Encode ) server packets to protect against hackers. EvelProxy - solves these problems

# How it works? 
EvelProxy works like a "human blood" linking all the important organs in a very simple way. EvelProxy keeps all servers in itself and communicates with them

# Tutorial: 
For create our proxy we have to just initializate our class

options: 
  - debugger: (true / false) -> If you need debug whole event you need to keep it true

![Screenshot_8](https://user-images.githubusercontent.com/105514122/193608442-003f4cd3-38c0-4204-84a2-5b005256c4fd.png)

Also if you need to create proxy server ( server that will be connected to Main Proxy )

options:
  - sid (server-id) -> Unique server-id , should be unique and numbered

![Screenshot_9](https://user-images.githubusercontent.com/105514122/193608706-bf9bfd42-dc13-473e-85f2-112e73b161f8.png)

**Pushing our server to Proxy**

![Screenshot_10](https://user-images.githubusercontent.com/105514122/193609380-3300b42f-e12c-487a-87be-ef5340933e4d.png)

**Setting packets obfuscation**
If you need to secure ur packets you can just set packetSecurityType
  Avaible security-types:
   - rotated (A) -> Rotates String , Number indexes example: [Input: 3928 / Output: 4582]
   - seedBuffer -> Rotates packet header , encrypts packet data by FFE algorithm: [Input: [4,5283,4920 / Output: [19,53,42,17,26]

createProtectionQuery needs to update packet encryption mode

![Screenshot_11](https://user-images.githubusercontent.com/105514122/193610266-03cc9373-ee0b-413c-b417-8d240160809c.png)

# ProxyEvents
Each proxy server has customizable event system

To hook any event we just need call our proxyServer with method 'on' with EventType

Examples:

![Screenshot_12](https://user-images.githubusercontent.com/105514122/193611937-063d9278-557a-4145-84db-bc4af0ce8abd.png)
 
![Screenshot_13](https://user-images.githubusercontent.com/105514122/193611963-44117da3-fb87-4755-a586-d4434c11da93.png)

Event Types: 
  - ProtocolEvent -> Calls when ProxyServer state changes
  - PacketEvent -> Calls when ProxyServer receive socket message from client

callback:
  - event -> whole stored data from event


!! More features will be added later, versions < 1.0 has low functional !!

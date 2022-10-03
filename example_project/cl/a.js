import ws from "ws";

const sock = new ws("ws://localhost:8080");

sock.onopen = () => {
    console.log('sent');
    sock.send(JSON.stringify([1,0]))
}
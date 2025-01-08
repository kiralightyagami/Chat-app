import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8000});

let userCount = 0;
let allSockets: WebSocket[] = [];
wss.on("connection",(socket) => {
    allSockets.push(socket);

    userCount += 1;
    console.log("user connected" + userCount);
    
    socket.on("message", (message) => {
        console.log("messsage recieved " + message.toString())
        for (let i = 0; i< allSockets.length; i++){
            const s = allSockets[i];
            s.send(message.toString() + ":sent from server");
        }
        
    })
})



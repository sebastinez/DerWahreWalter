const WebSocket = require("ws");

const wss = new WebSocket.Server({
  port: 8080,
  perMessageDeflate: false
});

const players = [];

wss.on("connection", (ws, req) => {
  ws.send(JSON.stringify({ data: players.map(player => player.name) }));

  console.log("WebSocket server open");
  ws.on("message", name => {
    players.push({ name, ws });
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({ data: players.map(player => player.name) })
        );
      }
    });
  });
});

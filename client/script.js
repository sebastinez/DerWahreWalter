const socket = new WebSocket("ws://localhost:8080");
const nameInput = document.querySelector("#nameInput");
const joinButton = document.querySelector("#joinBtn");
const playersDiv = document.querySelector("#players");
const joinForm = document.querySelector("#joinForm");

socket.addEventListener("open", function(event) {
  socket.addEventListener("message", message => {
    listPlayers(message);
  });

  joinButton.addEventListener("click", e => {
    e.preventDefault();
    socket.send(nameInput.value);
    disappearJoinForm();
  });
});

function listPlayers({ data }) {
  players = JSON.parse(data).data;
  playersDiv.innerHTML = "";
  players.forEach(player => {
    const newDiv = document.createElement("div");
    const newText = document.createTextNode(player);
    newDiv.appendChild(newText);
    playersDiv.appendChild(newDiv);
  });
}

function disappearJoinForm() {
  document.querySelector("#joinForm").style.display = "none";
}

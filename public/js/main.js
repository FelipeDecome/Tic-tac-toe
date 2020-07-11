import currentInstance from "./app/controller/Game.js";

const game = currentInstance();

document.querySelector("#reset").addEventListener("click", (event) => {
    event.preventDefault();
    game.reset();
});

// let gameState = {
//   playerTurn: game.players.getCurrentPlayer
//   togglePlayerTurn() {
//     // Done Game.js
//     game.players.toggleCurrentPlayer();
//   },
//   markField(row, column) {
//     // Done Grid.js
//     game.gameBoard.markField(row, column, this.playerTurn());

//     // ! REFATORAR
//     if (!this.verify()) {
//       game.players.toggleCurrentPlayer();
//     }
//   },

//   resetGrid() {
//     // ! Game.js
//     velha.classList.remove("winner");
//     velha.classList.remove("velha");
//     let player = this.playerTurn ? 1 : 0;
//     velha.classList.remove("player" + player);
//     velha.setAttribute("data-content", "");

//     game.players.resetCurrentPlayer();
//     // ! Grid.js
//     game.gameBoard.reset();
//   },
// };

// function statsPanelRender(playerTurn) {
//   // ! PanelView.js
//   stats.innerHTML = null;

//   let player = playerTurn + 1;
//   let spanStats = document.createElement("span");
//   spanStats.setAttribute("id", "player" + player);
//   spanStats.innerText = "Player " + player;

//   stats.append(spanStats);
// }

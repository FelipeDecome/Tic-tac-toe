const wrapper = document.querySelector("#velha");
const stats = document.querySelector("#stats");
const iconX = "<i class='fas fa-times'></i>";
const iconO = "<i class='fas fa-circle'></i>";

let gameState = {
  grid: new Grid(),
  playerTurn: 1, // ! Game.js
  togglePlayerTurn() {
    // ! Game.js
    if (this.playerTurn == 0) {
      this.playerTurn = 1;
    } else {
      this.playerTurn = 0;
    }
  },
  markField(row, column) {
    // ! Grid.js
    this.grid.markField(row, column, this.playerTurn);

    if (!this.verify()) {
      this.togglePlayerTurn();
    }

    render(this);
  },
  verify() {
    // ! Game.js
    if (GridHelper.verify(this.grid.getGrid())) {
      velha.classList.add("winner");
      let player = (this.playerTurn - 2) * -1;
      velha.classList.add("player" + player);
      velha.setAttribute("data-content", "Player " + player + " ganhou!");
      return true;
    } else if (GridHelper.verifyVelha(this.grid.getGrid())) {
      velha.classList.add("velha");
      velha.setAttribute("data-content", "Velha");
      return false;
    }
  },
  resetGrid() {
    // ! Grid.js
    this.grid.reset();

    // ! Game.js
    velha.classList.remove("winner");
    velha.classList.remove("velha");
    let player = this.playerTurn ? 1 : 0;
    velha.classList.remove("player" + player);
    velha.setAttribute("data-content", "");

    this.playerTurn = 1;

    render(this);
  },
};

function render(gameState) {
  // ! Game.js
  renderGrid(gameState.grid.getGrid());
  statsPanelRender(gameState.playerTurn);
}

render(gameState);

function renderGrid(grid) {
  // ! Grid.js
  wrapper.innerHTML = null;

  for (let l = 0; l < grid.length; l++) {
    let liRow = document.createElement("li");
    liRow.setAttribute("id", `row_${l}`);
    liRow.classList.add("row");

    let ul = createLiItemList(l, grid);

    liRow.append(ul);

    wrapper.append(liRow);
  }
}

function statsPanelRender(playerTurn) {
  // ! PanelView.js
  stats.innerHTML = null;

  let player = (playerTurn - 2) * -1;
  let spanStats = document.createElement("span");
  spanStats.setAttribute("id", "player" + player);
  spanStats.innerText = "Player " + player;

  stats.append(spanStats);
}

function createLiItemList(l, grid) {
  // ! Game.js
  let ul = document.createElement("ul");

  for (let c = 0; c < grid[l].length; c++) {
    let liItem = document.createElement("li");
    liItem.setAttribute("id", `item_${l}-${c}`);
    liItem.classList.add("item");

    liItem.addEventListener("click", event => {
      event.preventDefault(event);

      gameState.markField(l, c);
    });

    if (grid[l][c] === 0) {
      liItem.classList.add("iconO");
      liItem.innerHTML = iconO;
    } else if (grid[l][c] === 1) {
      liItem.classList.add("iconX");
      liItem.innerHTML = iconX;
    }

    ul.append(liItem);
  }
  return ul;
}

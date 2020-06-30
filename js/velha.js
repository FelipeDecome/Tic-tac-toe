const wrapper = document.querySelector("#velha");
const stats = document.querySelector("#stats");
const iconX = "<i class='fas fa-times'></i>";
const iconO = "<i class='fas fa-circle'></i>";

let gameState = {
  grid: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  playerTurn: 1,
  togglePlayerTurn() {
    if (this.playerTurn == 0) {
      this.playerTurn = 1;
    } else if (this.playerTurn == 1) {
      this.playerTurn = 0;
    }
  },
  markField(l, c) {
    if (this.grid[l][c] === "") {
      this.grid[l][c] = this.playerTurn;

      this.verify();
      this.togglePlayerTurn();

      render(this);
    }
  },
  verify() {
    if (
      verifyRow(this.grid) ||
      verifyColumn(this.grid) ||
      verifyDiag(this.grid)
    ) {
      velha.classList.add("winner");
      let player = (this.playerTurn - 2) * -1;
      velha.classList.add("player" + player);
      velha.setAttribute("data-content", "Player " + player + " ganhou!");
    } else if (verifyVelha(this.grid)) {
      velha.classList.add("velha");
      velha.setAttribute("data-content", "Velha");
    }
  },
  resetGrid() {
    for (let l = 0; l < this.grid.length; l++) {
      for (let c = 0; c < this.grid[l].length; c++) {
        this.grid[l][c] = "";
      }
    }

    velha.classList.remove("winner");
    velha.classList.remove("velha");
    let player = (this.playerTurn - 2) * -1;
    velha.classList.remove("player" + player);
    velha.setAttribute("data-content", "");

    this.playerTurn = 1;

    render(this);
  },
};

function render(gameState) {
  renderGrid(gameState.grid);
  statsPanelRender(gameState.playerTurn);
}

render(gameState);

function renderGrid(grid) {
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
  stats.innerHTML = null;

  let player = (playerTurn - 2) * -1;
  let spanStats = document.createElement("span");
  spanStats.setAttribute("id", "player" + player);
  spanStats.innerText = "Player " + player;

  stats.append(spanStats);
}

function verifyRow(grid) {
  for (let l = 0; l < grid.length; l++) {
    let soma = gameState.grid[l].reduce((total, itens) => total + itens, 0);
    if (soma === 3 || soma === 0) {
      return true;
    }
  }
  return false;
}

function verifyColumn(grid) {
  for (let l = 0; l < grid.length; l++) {
    let soma = 0;

    for (let c = 0; c < grid[l].length; c++) {
      soma += gameState.grid[c][l];
      console.log(soma);
    }
    if (soma === 3 || soma === 0) {
      return true;
    }
  }
  return false;
}

function verifyDiag(grid) {
  let somaDiag1 = grid[0][0] + grid[1][1] + grid[2][2];
  let somaDiag2 = grid[2][0] + grid[1][1] + grid[0][2];

  console.log(somaDiag1, somaDiag2);

  if (
    somaDiag1 === 3 ||
    somaDiag1 === 0 ||
    somaDiag2 === 3 ||
    somaDiag2 === 0
  ) {
    return true;
  } else {
    return false;
  }
}

function verifyVelha(grid) {
  for (let l = 0; l < grid.length; l++) {
    for (let c = 0; c < grid[l].length; c++) {
      if (grid[l][c] === "") {
        return false;
      }
    }
  }
  return true;
}

function createLiItemList(l, grid) {
  let ul = document.createElement("ul");

  for (let c = 0; c < grid[l].length; c++) {
    let liItem = document.createElement("li");
    liItem.setAttribute("id", `item_${l}-${c}`);
    liItem.classList.add("item");

    liItem.addEventListener("click", (event) => {
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

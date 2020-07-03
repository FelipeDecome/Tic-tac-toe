class Grid {
  constructor() {
    this._initGrid();

    this._observers = [];
  }

  getGrid() {
    return [].concat(this._grid);
  }

  reset() {
    this._initGrid();
  }

  _initGrid() {
    this._grid = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }

  markField(row, col, player) {
    if (this._idFieldNull(row, col)) {
      this._setField(row, col, player);
    } else {
      // TODO Criar Classe de Erro
      throw new Error(`Esse campo já está preenchido`);
    }
  }

  _idFieldNull(row, col) {
    return this._grid[row][col] === "";
  }

  _setField(row, col, player) {
    this._grid[row][col] = player;
  }

  subscribe(observer) {
    this._observers.push(observer);
  }

  unsubscribe(obsToDelete) {
    this._observers.filter(observer => observer !== obsToDelete);
  }

  notifyAll() {
    this._observers.forEach(observer => observers(this._grid));
  }
}

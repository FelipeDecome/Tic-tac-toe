class GridHelper {
  constructor() {}

  static verify(grid) {
    return (
      GridHelper._verifyRow(grid) ||
      GridHelper._verifyColumn(grid) ||
      GridHelper._verifyDiag(grid)
    );
  }

  static _verifyRow(grid) {
    for (let row = 0; row < grid.length; row++) {
      let soma = grid[row].reduce((total, itens) => total + itens, 0);
      if (soma === 3 || soma === 0) {
        return true;
      }
    }
    return false;
  }

  static _verifyColumn(grid) {
    for (let row = 0; row < grid.length; row++) {
      let soma = 0;

      for (let col = 0; col < grid[row].length; col++) {
        soma += grid[col][row];
      }
      if (soma === 3 || soma === 0) {
        return true;
      }
    }
    return false;
  }

  static _verifyDiag(grid) {
    let somaDiag1 = grid[0][0] + grid[1][1] + grid[2][2];
    let somaDiag2 = grid[2][0] + grid[1][1] + grid[0][2];

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

  static verifyVelha(grid) {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === "") {
          return false;
        }
      }
    }
    return true;
  }
}

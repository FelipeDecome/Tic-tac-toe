export default class BoardHelper {
  constructor() {
    throw new Error("BoardHelper não deve ser instanciada");
  }

  static verify(board) {
    return (
      BoardHelper._verifyRow(board) ||
      BoardHelper._verifyColumn(board) ||
      BoardHelper._verifyDiag(board)
    );
  }

  static _verifyRow(board) {
    for (let row = 0; row < board.length; row++) {
      let soma = board[row].reduce((total, itens) => total + itens, 0);
      if (soma === 3 || soma === 0) {
        return true;
      }
    }
    return false;
  }

  static _verifyColumn(board) {
    for (let row = 0; row < board.length; row++) {
      let soma = 0;

      for (let col = 0; col < board[row].length; col++) {
        soma += board[col][row];
      }
      if (soma === 3 || soma === 0) {
        return true;
      }
    }
    return false;
  }

  static _verifyDiag(board) {
    let somaDiag1 = board[0][0] + board[1][1] + board[2][2];
    let somaDiag2 = board[2][0] + board[1][1] + board[0][2];

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

  static verifyVelha(board) {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (board[row][col] === "") {
          return false;
        }
      }
    }
    return true;
  }
}

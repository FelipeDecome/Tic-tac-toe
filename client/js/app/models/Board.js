export default function createGameBoard() {
    let board = [];
    _initBoard();

    function getBoard() {
        return [].concat(board);
    }

    function reset() {
        board = board.map((row) => row.map((field) => (field = "")));
    }

    function _initBoard() {
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];
    }

    function markField(row, col, player) {
        if (_isFieldNull(row, col)) {
            _setField(row, col, player);
        } else {
            // TODO Criar Classe de Erro
            throw new Error(`Esse campo já está preenchido`);
        }
    }

    function _isFieldNull(row, col) {
        return board[row][col] === "";
    }

    function _setField(row, col, player) {
        board[row][col] = player;
    }

    return {
        getBoard,
        markField,
        reset,
    };
}

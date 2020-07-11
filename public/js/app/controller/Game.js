import Bind from "../utils/Bind.js";
import createPlayers from "../models/Players.js";
import createGameBoard from "../models/Board.js";
import createBoardView from "../views/BoardView.js";

import createStatusView from "../views/StatsView.js";

import BoardHelper from "../helpers/BoardHelper.js";

function createGame() {
    const boardView = createBoardView(document.querySelector(".velha-board"));

    const state = {
        board: new Bind(createGameBoard(), boardView, "markField", "reset"),
        players: new Bind(
            createPlayers(),
            createStatusView(document.querySelector(".stats")),
            "toggleCurrentPlayer",
            "reset"
        ),
    };

    function markField(row, column) {
        state.board.markField(row, column, state.players.getCurrentPlayer());

        if (BoardHelper.verify(state.board.getBoard())) {
            boardView.showWinner(state.players.getCurrentPlayer())();
            return;
        }

        if (BoardHelper.verifyVelha(state.board.getBoard())) {
            boardView.draw();
            return;
        }

        state.players.toggleCurrentPlayer();
        return;
    }

    function reset() {
        state.board.reset();
        state.players.reset();
        boardView.reset();
        return;
    }

    return {
        state,
        markField,
        reset,
    };
}

const game = createGame();
export default function currentInstance() {
    return game;
}

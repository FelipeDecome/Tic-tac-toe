import Bind from "./../utils/Bind.js";
import createPlayers from "./../models/Players.js";
import createGameBoard from "./../models/Board.js";
import createBoardView from "./../views/BoardView.js";

import createStatusView from "./../views/StatsView.js";

import BoardHelper from "./../helpers/BoardHelper.js";

import createObserver from "./../utils/ObserverFactory.js";

function createGame() {
    const boardView = createBoardView(document.querySelector(".velha-board"));
    const gameBoard = new Bind(
        createGameBoard(),
        boardView,
        "markField",
        "reset"
    );
    const players = new Bind(
        createPlayers(),
        createStatusView(document.querySelector(".stats")),
        "toggleCurrentPlayer",
        "reset"
    );

    function markField(row, column) {
        gameBoard.markField(row, column, players.getCurrentPlayer());

        if (BoardHelper.verify(gameBoard.getBoard())) return showWinner();

        if (BoardHelper.verifyVelha(gameBoard.getBoard())) return showVelha();

        players.toggleCurrentPlayer();
    }

    function reset() {
        gameBoard.reset();
        players.reset();
        boardView.reset();
    }

    function showWinner() {
        boardView.showWinner(players.getCurrentPlayer());
    }

    function showVelha() {
        boardView.draw();
    }

    return {
        markField,
        reset,
    };
}

const game = createGame();
export default function currentInstance() {
    return game;
}

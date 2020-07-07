export default function createPlayers() {
    let currentPlayer = 0;

    function toggleCurrentPlayer() {
        if (currentPlayer === 0) {
            currentPlayer = 1;
        } else {
            currentPlayer = 0;
        }
    }

    function reset() {
        currentPlayer = 0;
    }

    function getCurrentPlayer() {
        return currentPlayer;
    }

    return {
        toggleCurrentPlayer,
        getCurrentPlayer,
        getCurrentPlayerMarker,
        reset,
    };
}

const playerMarker = ["X", "O"];

function getCurrentPlayerMarker(player) {
    return playerMarker[player];
}

export { getCurrentPlayerMarker };

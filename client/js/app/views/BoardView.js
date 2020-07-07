import createClickHandler from "./../helpers/ClickHandler.js";
import { getCurrentPlayerMarker } from "./../models/Players.js";

export default function createBoardView(element) {
    const htmlElement = element;

    const clickHandler = createClickHandler();
    const markers = [
        "<i class='fas fa-times'></i>",
        "<i class='fas fa-circle'></i>",
    ];

    htmlElement.addEventListener("click", (event) =>
        clickHandler.handleClick(event.target)
    );

    function _template(model) {
        const board = model.getBoard();

        return `<ul>${board
            .map(
                (row, rowIndex) =>
                    `
            <li class="row">
              <ul>
              ${row
                  .map(
                      (field, columnIndex) =>
                          `<li
                            class="item ${
                                field !== ""
                                    ? "icon" + getCurrentPlayerMarker(field)
                                    : ""
                            }"
                            data-row="${rowIndex}"
                            data-column="${columnIndex}">${
                              field !== "" ? markers[field] : ""
                          }</li>`
                  )
                  .join("")}
              </ul>
            </li>

          `
            )
            .join("")}
      </ul>`;
    }

    function update(model) {
        htmlElement.innerHTML = _template(model);
    }

    function showWinner(player) {
        htmlElement.classList.add("winner");
        htmlElement.classList.add(`player${player + 1}`);
        htmlElement.setAttribute(
            "data-content",
            `Player ${player + 1} ganhou!`
        );
    }

    function draw() {
        htmlElement.classList.add("velha");
        htmlElement.setAttribute("data-content", "Velha!");
    }

    function reset() {
        htmlElement.classList.remove("winner");
        htmlElement.classList.remove("velha");
        htmlElement.classList.remove("player1");
        htmlElement.classList.remove("player2");
    }

    return { update, showWinner, draw, reset };
}

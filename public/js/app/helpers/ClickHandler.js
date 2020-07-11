import currentInstance from "../controller/Game.js";

export default function createClickHandler() {
    function handleClick(target) {
        const row = target.getAttribute("data-row");
        const column = target.getAttribute("data-column");
        currentInstance().markField(row, column);
    }
    return {
        handleClick,
    };
}

export default function createStatsView(element) {
    const htmlElement = element;

    function _template(model) {
        return `<span id="player${model.getCurrentPlayer() + 1}">Player ${
            model.getCurrentPlayer() + 1
        }</span>`;
    }

    function update(model) {
        htmlElement.innerHTML = _template(model);
    }

    return { update };
}

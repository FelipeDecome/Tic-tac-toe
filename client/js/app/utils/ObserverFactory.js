export default function createObserver() {
    let list = [];

    function subscribe(observer) {
        list.push(observer);
    }

    function unsubscribe(observer) {
        list = list.filter((item) => item !== observer);
    }

    function notifyAll(data) {
        list.forEach((observer) => observer(data));
    }

    return {
        subscribe,
        unsubscribe,
        notifyAll,
    };
}

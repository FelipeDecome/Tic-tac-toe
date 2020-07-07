import createProxy from "./ProxyFactory.js";

export default class Bind {
    constructor(model, view, ...props) {
        const proxy = createProxy(model, props, (model) => {
            view.update(model);
        });

        view.update(model);
        return proxy;
    }
}

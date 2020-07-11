export default function createProxy(object, props, action) {
    return new Proxy(object, {
        get(target, prop, receiver) {
            if (props.includes(prop) && isFunc(target[prop])) {
                return function () {
                    //   console.log(`Método ${prop} interceptado`);
                    let response = Reflect.apply(
                        target[prop],
                        target,
                        arguments
                    );
                    action(target);

                    return response;
                };
            }

            return Reflect.get(target, prop, receiver);
        },
        set(target, prop, value, receiver) {
            //   console.log(`Alteração de ${prop} interceptada`);

            let response = Reflect.set(target, prop, value, receiver);
            if (props.includes(prop)) action(target);

            return response;
        },
    });

    function isFunc(prop) {
        return typeof prop === typeof Function;
    }
}

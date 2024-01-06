export function escapar(target, propertyKey, descripor) {
    const metodoOriginal = descripor.value;
    descripor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === "string") {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        return retorno;
    };
    return descripor;
}

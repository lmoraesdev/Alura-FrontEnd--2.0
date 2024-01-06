export function escapar(
	target: any,
	propertyKey: string,
	descripor: PropertyDescriptor
) {
	const metodoOriginal = descripor.value;
	descripor.value = function (...args: any[]) {
		let retorno = metodoOriginal.apply(this, args);
		if (typeof retorno === "string") {
			retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, "");
		}
		return retorno;
	};
	return descripor;
}

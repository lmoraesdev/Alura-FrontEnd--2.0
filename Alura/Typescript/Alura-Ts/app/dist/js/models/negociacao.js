export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    paraTexto() {
        return `
			Data: ${this.data},
			Quatidade: ${this.quantidade},
			Valor: ${this.valor}
		`;
    }
    ehIgual(Negociacao) {
        return (this.data.getDate() === Negociacao.data.getDate() &&
            this.data.getMonth() === Negociacao.data.getMonth() &&
            this.data.getFullYear() === Negociacao.data.getFullYear());
    }
}

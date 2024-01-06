import { Modelo } from "../interfaces/modelo.js";


export class Negociacao implements Modelo<Negociacao>{
	constructor(
		private _data: Date,
		public readonly quantidade: number,
		public readonly valor: number
	) {}

	public static criaDe(
		dataString: string,
		quantidadeString: string,
		valorString: string
	): Negociacao {
		const exp = /-/g;
		const date = new Date(dataString.replace(exp, ","));
		const quantidade = parseInt(quantidadeString);
		const valor = parseFloat(valorString);
		return new Negociacao(date, quantidade, valor);
	}

	get volume(): number {
		return this.quantidade * this.valor;
	}

	get data(): Date {
		const data = new Date(this._data.getTime());
		return data;
	}

	public paraTexto(): string {
		return `
			Data: ${this.data},
			Quatidade: ${this.quantidade},
			Valor: ${this.valor}
		`;
	}

	public ehIgual(Negociacao: Negociacao): boolean {
		return (
			this.data.getDate() === Negociacao.data.getDate() &&
			this.data.getMonth() === Negociacao.data.getMonth() &&
			this.data.getFullYear() === Negociacao.data.getFullYear()
		);
	}
}

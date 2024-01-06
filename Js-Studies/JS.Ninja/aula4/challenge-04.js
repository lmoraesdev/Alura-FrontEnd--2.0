/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function ( a ){
	return !!a
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(''))
console.log(isTruthy(""))
console.log(isTruthy(null))
console.log(isTruthy(NaN))
console.log(isTruthy(0))
console.log(isTruthy(-0))
console.log(isTruthy(undefined))

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy( 10 ));
console.log(isTruthy( [] ));
console.log(isTruthy( {} ));
console.log(isTruthy( function(){} ));
console.log(isTruthy( 15000 ));
console.log(isTruthy( "faca" ));
console.log(isTruthy( 1 + 1 ));
console.log(isTruthy( 'arroz' ));
console.log(isTruthy( 'carne' ));
console.log(isTruthy( "machado" ));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
	marca:'Chevrolet',
	modelo:'Corsa',
	placa:'leandro',
	ano: 1994,
	cor:'branco',
	quantasPortas: 4,
	assentos: 5,
	quantidadePessoas:0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(cor){
	carro.cor = cor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
	return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
	return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
	return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
	return 'Esse carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo( );
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.pessoaDentro = function( pessoas ){
	var vagas = carro.assentos - carro.quantidadePessoas;
	var plural = vagas > 1 ? ' pessoas' : ' pessoa';

	if (vagas == 0) return 'o carro ja esta lotado';

	if ( vagas >= pessoas ) {
		carro.quantidadePessoas += pessoas;
		return `Já temos ${carro.quantidadePessoas} pessoas no carro!`;
	} else if ( pessoas > vagas) {
		return 'só cabem mais '+ vagas + plural;
	}
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor())

// Mude a cor do carro para vermelho.
console.log(carro.mudarCor('vermelho'))

// E agora, qual a cor do carro?
console.log(carro.obterCor())

// Mude a cor do carro para verde musgo.
console.log(carro.mudarCor('verde musgo'))

// E agora, qual a cor do carro?
console.log(carro.obterCor())

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo())

// Adicione 2 pessoas no carro.
console.log(carro.pessoaDentro(2))

// Adicione mais 4 pessoas no carro.
console.log(carro.pessoaDentro(4))
// Faça o carro encher.
console.log(carro.pessoaDentro(1))


// Tire 4 pessoas do carro.
console.log(carro.pessoaDentro(-2))


// Adicione 10 pessoas no carro.
console.log(carro.pessoaDentro(10))


// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas)

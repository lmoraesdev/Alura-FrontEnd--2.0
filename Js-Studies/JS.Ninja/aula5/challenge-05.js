/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [ 1, 2 , 3 , 4 , 5 ]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function funcao (array){
	return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(funcao(qualquer)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function indiceArr ( a , b ) {
    return a[b]
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arry = [ 10, 20, 30, 40, 50]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(indiceArr( arry, 0))
console.log(indiceArr( arry, 1))
console.log(indiceArr( arry, 2))
console.log(indiceArr( arry, 3))
console.log(indiceArr( arry, 4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book ( livro, sobre ) {
    var objeto = {
        'merlin1': {
            quatidadePaginas: 1800,
            autor: 'deyky',
            editor:'pri',
        },
        'merlin2': {
            quatidadePaginas: 50,
            autor: 'priArroiz',
            editor:'danilo',
        },
        'merlin3': {
            quatidadePaginas: 1,
            autor: 'danilo',
            editor:'deyky'
        }
    }
    if(sobre != undefined)
    {
        if(sobre == 'quatidadePaginas')
        {
            return `O livro ${livro} tem ${objeto[livro][sobre]} páginas!`
        }
        if(sobre == 'autor')
        {
            return `O autor do livro ${livro} é ${objeto[livro][sobre]}.`
        }
        if(sobre == 'editor')
        {
            return `O livro ${livro} foi publicado pela editora ${objeto[livro][sobre]}.`
        }
    }
    if(livro == undefined){
        return objeto;
    }
    return objeto[livro]
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book('merlin3','autor'))

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?

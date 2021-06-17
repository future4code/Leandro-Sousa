// Exercício de Interpretação -------------------------------------------------------------------
//1. a) 10, 50.
// b) Nada aconteceria! So iria armazenar os valores da memoria! 

//2.a) Essa função toda a frase ficar com letras minuscula e vai checar se na frase a palabra "cenoura"
// b) i. eu gosto de cenoura true  ------- ii.cenoura é bom pra vista true ------ iii. cenouras crescem na terra false 




// --------------------------------------------------------- EXERCÍCIO 1 -----------------------------------------------------------------
//A)
function fraseSobreMim() {
    console.log("Eu sou Leandro Wilker, tenho 27 anos, moro Brasília sou professor de dança de salão!")
}

fraseSobreMim()


//B)
const meuNome = "Leandro Wilker"
const idade = 27
const minhaCidade = "Brasília"
const profissao = "professor de dança de salão."


function fraseSobreMim2(meuNome, idade, minhaCidade,profissao) {
    console.log("Eu sou ", meuNome, ", tenho ",idade, " anos, moro em ", minhaCidade, " e sou " ,profissao)
}

fraseSobreMim2(meuNome, idade, minhaCidade,profissao)


// --------------------------------------------------------- EXERCÍCIO 2 -----------------------------------------------------------------
//A)
const numeroA = Number(prompt("Digite um numero:"))
const numeroB = Number(prompt("Digite outro numero:"))

function soma(numeroA,numeroB) {
    const somaAb = numeroA + numeroB
    return somaAb
}

const somaAb = soma(numeroA,numeroB)

console.log(somaAb)

//B)
const numeroBoleanA = Number(prompt("Digite um numero:"))
const numeroBoleanB = Number(prompt("Digite outro numero:"))

function trueOrFalse(numeroA,numeroB) {
    const yon = numeroA === numeroB
    return yon
}

const verdadeOuFalso = trueOrFalse(numeroBoleanA,numeroBoleanB)

console.log(verdadeOuFalso) 

//C)
const numeroParOuImpar = Number(prompt("Digite um numero:"))

function parouImpar(numero) {
    const numeroParOuImpar = numero % 2 === 0
    return numeroParOuImpar
}

const pareImpar = parouImpar(numeroParOuImpar)

console.log(pareImpar) 


//D)
let fraseString = prompt("Digite uma mensagem:")

function mudandoFrase(texto) {
    return texto
}

const novaFrase = mudandoFrase(fraseString)

console.log(fraseString.toUpperCase(),length)


// --------------------------------------------------------- EXERCÍCIO 3 -----------------------------------------------------------------

function soma(numeroA,numeroB) {
    return numeroA + numeroB
}

function subtracao(numeroA,numeroB) {
    return numeroA - numeroB
}

function multiplicacao(numeroA,numeroB) {
    return numeroA * numeroB
}

function divisao(numeroA,numeroB) {
    return numeroA / numeroB
}


const numero1 = Number(prompt("Digite um numero"))
const numero2 = Number(prompt("Digite outro numero"))

const soma1 = soma(numero1, numero2)
const subtracao1 = subtracao(numero1, numero2)
const multiplicacao1 = multiplicacao(numero1,numero2)
const divisao1 = divisao(numero1,numero2)

function mostrandoTudo() {

    console.log("Numero inseridos", numero1," ", numero2)
    console.log("Soma :", soma1)
    console.log("Substração: ", subtracao1)
    console.log("Multiplicação", multiplicacao1)
    console.log("Divisão", divisao1)

}

mostrandoTudo()


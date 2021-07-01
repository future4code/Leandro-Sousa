//---------------------------------------------------------------------EXERCICIO 1--------------------------------------------------------------

const nome1 = prompt("Qual seu nome? ")

const idade1 = prompt("Qual a sua idade? ")
idadeNumero = Number(idade1)



console.log(typeof nome1)
console.log(typeof idade1)

//Esse tipo(string) foi impresso, por que eu declarei seus valores a partir do momento em que eu chamo a sintaxe 'prompt'.

console.log("Olá",nome1 , "voce tem ", idadeNumero,"anos!")


//---------------------------------------------------------------------EXERCICIO 2---------------------------------------------------------------



const primeiraPergunta = prompt("Você ja comeu hoje?[Sim]ou[Não]")
const segundaPergunta = prompt("Ja se exercitou hoje?[Sim]ou[Não]")
const terceiraPergunta = prompt("Você ja teve algum bixo de estimação? [Sim]ou[Não]")

console.log("Você ja comeu hoje?", primeiraPergunta)
console.log("Ja se exercitou hoje?",segundaPergunta)
console.log("Você ja teve algum bixo de estimação?",terceiraPergunta )



//---------------------------------------------------------------------EXERCICIO 3---------------------------------------------------------------

let a = 10 
let b = 25
let c = 0 


c = a
a = b
b = c 



console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)


//DESAFIO

const numero1 = prompt("Digite um numero: ")
numerox1 = Number(numero1)

const numero2 = prompt("Digite outro numero: ")
numerox2 = Number(numero2)

console.log("A soma dos numero e: ", numerox1 + numerox2)

console.log("Agora vamos de multiplicação")

console.log("O numero multiplicado e ", numerox1 * numerox2)
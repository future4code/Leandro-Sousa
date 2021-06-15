// Exercício de interpretação

// -------------------------- Exercício 1-----------------------------
//resultado a: false
//resultado b: true
//resultado c: false
//resultado d: bolean

// -------------------------- Exercício 2-----------------------------
/*Ele vai receber o primeiro e o segundo numero como string por conta do "Prompt"
então ele vai juntar os dois numero como frase, exemplo: Primeiro numero = 22
segundo numero = 23, resultado = 2223. Eu iria indicar ao amigo o uso do Number
antes do "Prompt"*/

// -------------------------- Exercício 3-----------------------------

//Eu iria mostrar a solução pra ele indeticiar o erro e mostrar como ele pode concertar!

/* let primeiroNumero = number(prompt("Digite um numero!"))
let segundoNumero = number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) */

// Exercício de escrita de código


// -------------------------- Exercício 1-----------------------------

const idadeUsuario = Number(prompt("Qual a sua idade?"))
const idadeAmigx = Number (prompt("Qual a idade do seu/sua melhor amigo(a)?"))

const maiorOuMenor = idadeUsuario >= idadeAmigx

console.log("Sua idade é maior do que a do seu melhor amigo?", maiorOuMenor)

console.log("Diferença de idade: ", idadeUsuario - idadeAmigx)


// -------------------------- Exercício 2-----------------------------

const numeroPar = Number(prompt("Digite um numero Par"))

const calculoPar = numeroPar % 2

console.log(calculoPar)

//Todas as vezes que coloco um numero par ele me dar o resultado 0
// Quando eu coloco um numero Impar ele me devolver algum resultado que não e 0

// -------------------------- Exercício 3-----------------------------

const idadeAno = Number(prompt("Qual a sua idade?"))

console.log("Idade em meses!", idadeAno * 12)
console.log("Idade em dias!", idadeAno * 365)
console.log("Idade em Horas!", idadeAno * 8760)

// -------------------------- Exercício 4-----------------------------

const numeroA = Number(prompt("Digite um numero:"))
const numeroB = Number(prompt("Digite outro numero:"))

let resultado = numeroA > numeroB
console.log("O primeiro numero é maior que o segundo? ", resultado )

resultado = numeroA === numeroB
console.log("O primeiro numero è igual ao seugndo?", resultado)

resultado = numeroA % numeroB === 1
console.log("O primeiro numero é divisivel pelo segundo?", resultado)

resultado = numeroB % numeroA === 1 
console.log(" O segundo numero é divisivel pelo primeiro?", resultado)


// ----------------------->Exercício de Interpretação<-------------------------------
/*1. a. Undenfined
    b. Null
    c. 11
    d. 3
    e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    f.10

  2. "SUBI NUM ÔNIBUS EM MIRROCOS " 27
     */
    
// ----------------------->EXERCÍCIO 1<----------------------------

const nomeDoUsuario = prompt("Digite seu nome:")
const emailDoUsuario = prompt("Digite o seu email:")

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o)" + nomeDoUsuario + "!")

// ----------------------->EXERCÍCIO 2<----------------------------

let comidasFavoritas = ["Sushi","Salada","Legumes","Pizza","Hamburguer"]

onsole.log("Essas são minhas comidas favoritas: ")

onsole.log(comidasFavoritas)

const trocaComida = prompt("Digite uma outra comida favorita:")

comidasFavoritas.splice(1,1,trocaComida)


// ----------------------->EXERCÍCIO 3<----------------------------
const listaDeTarefas1 = prompt("Digite uma tarefa que precisa realizar:")
const listaDeTarefas2 = prompt("Digite uma outra tarefa que precisa realizar:")
const listaDeTarefas3 = prompt("Digite uma outra tarefa que precisa realizar:")

let listaDeTarefas = [listaDeTarefas1,listaDeTarefas2,listaDeTarefas3]

console.log(listaDeTarefas)

const i = Number(prompt("Digite o numero da tarefa que ja realizou [0, 1 ou 2]"))
listaDeTarefas.splice(i,1)

console.log(listaDeTarefas)


// ----------------------->Desafios<----------------------------

//1.




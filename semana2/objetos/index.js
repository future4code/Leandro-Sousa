// Exercícios de interpretação de código ---------------------------------------------------------

//1.a
//Matheus Nachtergaele
//Virginia Cavendish
//Globo 14h

//2.a
//Juca 3 SRD
//Juba 3 SRD
//Jubo 3 SRD

//b 
// Copia o objeto 

//3.a
// False
// Undefined
//b
//No caso do "Backender" ele encontra a informação dentro do objeto, no caso da altura ele n encontra nada pq ela n existe, e não apontamos nada para ele criar uma outra variavel! 




//Exercícios de escrita de código -----------------------------------------------------------------------

//-----------------------------------------Execício 1 ----------------------------------------------------
/*const nome1 = prompt("Digite um nome:")
apelido1 = prompt("Digite um apelido:")
apelido2 = prompt("Digite um apelido:")
apelido3 = prompt("Digite um apelido:")


const pessoa = {
    nome: nome1,
    apelidos : [apelido1,apelido2,apelido3]

}

function recebendoObjeto(objeto1) {
    console.log(`Eu sou ${nome1}, mas pode me chamar de : ${pessoa.apelidos}`)
}

recebendoObjeto(pessoa)

//-----------------------------------------Execício 2 ----------------------------------------------------
const nome2 = "Leandro"
const idade2 = 27
const profissao2 = "Professor"


const objeto2 = {
    nome: nome2,
    idade: idade2,
    profissao: profissao2,  
}

const copianome2 = {
    ...objeto2,
    nome: "Caio",
    idade: 25,
    profissao : "Cozinheiro"
}

function colocandoObjetos(objeto2) {

    const mostrar = [objeto2.nome, objeto2.nome.length,objeto2.idade,objeto2.profissao,objeto2.profissao.length]
    console.log(mostrar)
}

colocandoObjetos(objeto2)
colocandoObjetos(copianome2) */

//-----------------------------------------Execício 3 ----------------------------------------------------

const carrinho = []

const frutasDoSacolao = {
    nome3:"Fruta",    
    disponivel: true
}

const frutasDoSacolao2 = {
    ...frutasDoSacolao
}

const frutasDoSacolao3 = {
    ...frutasDoSacolao
}

function frutasNoCarrinho(colocandoFruta) {
    carrinho.push(colocandoFruta)
}

frutasNoCarrinho(frutasDoSacolao)
frutasNoCarrinho(frutasDoSacolao2)
frutasNoCarrinho(frutasDoSacolao3)

console.log(carrinho)
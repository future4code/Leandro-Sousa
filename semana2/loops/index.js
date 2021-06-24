//-------------------------------------------Exercícios de interpretação de código----------------------------------------------------------------
//1. A
//Ele ta contando o ate "4"!     O valor impresso no console e 4!

//2. A
//19,21,23,25,27,30
//B.
//Não e o suficiente, teria que usar a função for... acesando o índice especifico da lista usando o lista[i]

//3. A
// o resultado impresso no console seria "****"

//-------------------------------------------Exercícios de escrita de código------------------------------------------------------------
//1.
const quantidadeDogs = Number(prompt("Quantos bichinhos você tem?"))
let numeroDeDogs = []

function temDogsOuNao(quantidade) {
    if(quantidade === 0) {
        console.log("Que pena!Você pode adotar um pet.")
    }else{
        for(let i = 1; i <= quantidadeDogs; i++ ) {
            let dogs = prompt("Digite o nome do seu bichinho:")
            numeroDeDogs.push(dogs)
        }

    }
    return numeroDeDogs

}

temDogsOuNao(quantidadeDogs)
console.log(numeroDeDogs)


//2. 
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]



function programaA(){
    for(let i = 0; i <= arrayOriginal; i++ ) {
    console.log(arrayOriginal[i])
    }
    }

function programaB(){
    for(let i = 0; i <= arrayOriginal; i++ ) {
        console.log(arrayOriginal[i] / 10)
    }
    }

// Desisto por hoje não to mto legal!
//Exercícios de interpretação de código ---------------------------------------------------------------
//1. vai mostrar as tres como objeto(por conta das sua propriedades), seus pelidos e posição na array e por ultimo a array inteira original!

//2. Vai retornar apenas o nome delas! 

//3.Vai retonar todos que tenha apelidos difrente de CHijo


//Exercícios de escrita de código---------------------------------------------------------------------------------
//-------------------------------------------Exercício 1--------------------------------------------------------------

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const novoArrayDogsNomes = pets.map((nomesDogs) => {
//     return nomesDogs.nome
//  })

//  console.log(novoArrayDogsNomes)


//  const novoArrayDogsSalsichas = pets.filter((nomesDogs) => {
//     return nomesDogs.raca === "Salsicha"
//  })

//  console.log(novoArrayDogsSalsichas)

//  const novoArrayDogsPoodles = pets.filter((nomesDogs) => {
//      if(nomesDogs.raca === "Poodle"){
//         console.log("Você ganhou um cupom de desconto de 10% para tosar o/a ", nomesDogs.nome)
//      }
    
//  })

//  console.log(novoArrayDogsPoodles)

//-------------------------------------------Exercício 2--------------------------------------------------------------

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const novoArrayNomesComida = produtos.filter((comida) => {
     return comida.nome
 })


 const novoArrayNomesComida2 = produtos.map((comida) => {
    const comidaMult = comida.preco
    const novoComida = {nome: comida.nome, preco: comida.preco + comida.preco * 0.05}
    return novoComida
})
 
const novoArrayNomesComida3 = produtos.filter((comida) => {
    return comida.categoria === "Bebidas"
})

const novoArrayNomesComida4 = produtos.filter((comida) => {
    const includes = comida.nome.includes("Ypê")
    return includes
})

console.log(novoArrayNomesComida)
console.log(novoArrayNomesComida2)
console.log(novoArrayNomesComida3)
console.log(novoArrayNomesComida4)
console.log(novoArrayNomesComida5)
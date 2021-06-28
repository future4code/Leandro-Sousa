// EXERCÍCIO 01
function inverteArray(array) {
  
  let newarray = []

  for(let valores of array){
    newarray.unshift(valores)
  }

  return newarray
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let newArray = []
  for(let valores of array){
    if(valores % 2 === 0){
      newArray.push(valores * valores)
    }
  }
  return newArray
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let newArrayPares = []
  for(let valores of array){
    if(valores % 2 === 0){
      newArrayPares.push(valores)
    }
  
  }
  return newArrayPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorvalor = 0
  for(let valores of array){
    if(valores > maiorvalor){
      maiorvalor = valores
    } 
  }
  return maiorvalor
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length

}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  let novaArray = []

  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 

  const a = booleano1 && booleano2 && !booleano4
  const b = (booleano1 && booleano2) || !booleano3
  const c = (booleano2 || booleano3) && (booleano4 || booleano1)
  const d = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const e = !(booleano2 && booleano3) || !(booleano1 && booleano3)

  novaArray.push(a)
  novaArray.push(b)
  novaArray.push(c)
  novaArray.push(d)
  novaArray.push(e)

return novaArray

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  let resposta = ""
  
 if(a === b && b === c){
   resposta = "Equilátero"
 }else if(a === b && b != c){
  resposta = "Isósceles"
 }else if(a != b && b != c && c != a){
  resposta = "Escaleno"
 }else{
  resposta = "Ele não existe"
 }
 return resposta

}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {

  let maiorNumero = 0
  let menorNumero = 0
  
  if(num1 >= num2){
    maiorNumero = num1
    menorNumero = num2
  }else if(num2 >= num1){
    maiorNumero = num2
    menorNumero = num1
  }


  const diferenca = maiorNumero - menorNumero

  const maiorDivisivelPorMenor = maiorNumero % menorNumero == 0

  
  let objeto = {
     maiorNumero: maiorNumero,
     maiorDivisivelPorMenor: maiorDivisivelPorMenor,
     diferenca: diferenca
   }
   return objeto
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {


}

// EXERCÍCIO 12
function filmeFavorito() {
let objeto = {
  nome: "O Diabo Veste Prada",
  ano : 2006,
  diretor : "David Frankel",
  atores: ["Meryl Streep","Anne Hathaway","Emily Blunt","Stanley Tucci"]

}
return objeto

}

// EXERCÍCIO 13
function imprimeChamada() {
  let objeto = {
    nome: "O Diabo Veste Prada",
    ano : 2006,
    diretor : "David Frankel",
    atores: ["Meryl Streep","Anne Hathaway","Emily Blunt","Stanley Tucci"]
  
  }
  

 return `Venha assistir ao filme ${objeto.nome}, de ${objeto.ano}, dirigido por ${objeto.diretor} e estrelado por ${objeto.atores[0]}, ${objeto.atores[1]}, ${objeto.atores[2]}, ${objeto.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  objeto = {
    largura: lado1,
    altura:lado2 ,
    perimetro:2 * (lado1 + lado2) ,
    area: lado1 * lado2
  }
  return objeto
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

  const pessoaAnonima = {
    ...pessoa ,
    nome: "ANÔNIMO"
  }

  return pessoaAnonima

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}

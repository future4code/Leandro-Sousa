// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  const altura01 = Number(prompt("Digite a altura:"))
  const largura01 = Number(prompt("Digite a largura:"))

  const retangulo = altura01 * largura01

  console.log(retangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
 
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Digite o ano do seu nascimento:"))

  const idadeAtual = anoAtual - anoNascimento

  console.log(idadeAtual)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura02) {

  const imc = peso / (altura02 * altura02)

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome01 = prompt("Digite seu nome:")
  const idade01 = prompt("Digite sua idade:")
  const email01 = prompt("Digite seu email:")

  console.log(`Meu nome é ${nome01}, tenho ${idade01} anos, e o meu email é ${email01}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite 1 cor favorita")
  const cor2 = prompt("Digite outra cor favorita")
  const cor3 = prompt("Digite outra cor favorita")
  const coresArray = [cor1,cor2,cor3]

  console.log(coresArray)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(frase01) {

  return frase01.toUpperCase()
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const resultadoIngresso = custo / valorIngresso
  return resultadoIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const trueOrFalse = string1.length === string2.length
  return trueOrFalse
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
 return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiro = array[0]
  let ultimo = array[array.length -1]

  array.splice(0,1,ultimo)
  array.splice(array.length -1, 1,primeiro)

  return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  

  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual02 = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Digite o ano de nascimento:"))
  const carteiEmissao = Number(prompt("Digite o ano de emissão da sua carteira:"))

  const idade = anoAtual02 - anoNascimento
  const verifica = anoAtual02 - carteiEmissao
 
  const menosQue20 = idade <= 20 && verifica >= 5
  const entre50E20 = idade >20 && idade <=50 && verifica >= 10
  const maisque50 = idade >50 && verifica >= 15

  const precisaOuNao = menosQue20 || entre50E20 || maisque50

  console.log(precisaOuNao)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
    const condicao1 = ano % 400 === 0
    const condicao2 = ano % 4 === 0 && !(ano % 100 === 0 && !condicao1) 
  
    return condicao1 || condicao2;
  

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const perguntaIdade = prompt("Você tem mais de 18 anos?[sim ou não]")
  const perguntaEscola = prompt("Você possui ensino médio completo?[sim ou não]")
  const perguntaCurso= prompt("Você possui disponibilidade exclusiva durante os horários do curso?[sim ou não]")

  const idadeSimouNao = perguntaIdade === "sim"
  const idadeSimouNao2 = perguntaEscola === "sim"
  const idadeSimouNao3 = perguntaCurso === "sim"

  const apito = idadeSimouNao && idadeSimouNao2 && idadeSimouNao3

  console.log(apito)
}
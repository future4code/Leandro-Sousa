// Exercícios de interpretação de código ------------------------------------------------------

//1 A.
// Se o valor da equação for = 0 ele vai dizer que a pessoa passou no teste, senão ele diz que não passou
//B.
// Para numeros divivisiveis por 2 
//C.
//Qaulquer numero em que a queação nao de 0!

//2.
//A. O codigo indica que a partir do momento em que o usuario escrever o nome de uma fruta ele informa o nome e valor dessa fruta! 

//B. O preço da fruta Maçã é 2.25

//C. Nada, ele mantem imprimindo o console.log

//3
//A. Recebendo um valor em numero e guardando em uma variavel 
//B. Esse numero passou no teste


// se o numero fosse -10
//não iria aparecer nada! 

//C. Teria um erro por conta do valor que e criando dentro do IF não esta sendo retornado impossivel de ser acessado ou criado no escopo de fora



//Exercícios de escrita de código --------------------------------------------------------------------

// ------------------------------------------------------------------Exercício 1 --------------------------------------------------------------------------
const idade = Number(prompt("Digite sua idade:"))


function aptDirigir(idade) {

    if (idade >= 18) {
        console.log("Você pode dirigir")
    }else {
        console.log("Você não pode dirigir")
    }
}

aptDirigir(idade) 

// ------------------------------------------------------------------Exercício 2 --------------------------------------------------------------------------

const turno = prompt("Digite qual turno você esta! M matunino V vespertino N noturno")

function dizendoTurno(turnoBolado) {

    if (turnoBolado === "M") {
        console.log("Bom dia")
    }else if(turnoBolado === "V") {
        console.log("Boa Tarde")
    }else if(turnoBolado === "N")
    console.log("Boa noite")
}



// ------------------------------------------------------------------Exercício 3 --------------------------------------------------------------------------

dizendoTurno(turno)

function dizendoTurno2(turnoBolado) {

    switch(turnoBolado) {
        case "M":
            console.log("Bom dia")
            break
        case "V":
            console.log("Boa tarde")
            break
        case "N":
            console.log("Boa noite")
            break
        default:
            console.log("Eu escolho você")    
    }
}

dizendoTurno2(turno)

// ------------------------------------------------------------------Exercício 4 com desafio 1 --------------------------------------------------------------------------

const generoFilme = prompt("Qual genero de filme você vai assitir?")
const preco = Number(prompt("Qual o valor do ingresso?"))


function selecionandoFilme(genero,preco){

    if(genero === "Fantasia" && preco <15 ) {
        const comida = prompt("Qual comida voce quer levar?")
        console.log("Bom filme.")   
        console.log(`Aproveite o seu ${comida}`)
     } else{
        console.log("Escolha outro Filme :(")
    }

}

selecionandoFilme(generoFilme,preco)


// ------------------------------------------------------------------Desafio 2 --------------------------------------------------------------------------

const nomeCompleto = prompt("Digite seu nome completo:")
const tipoDeJogo = prompt("Tipo de jogo? [IN]ou[DO]")
const etapaDeJogo = prompt("Etapa do jogo: [SF][DT][FI]")
const categoriaJogo = Number(prompt("Categoria de jogo? 1 a 4"))
const quantidadeIngresso = Number(prompt("Quantos ingressos:"))

function mostrandoTudo(nome,tipo,etapa,categoria,quantidade) {
    console.log(`Nome do CLiente: ${nome}`)
    console.log(`Tipo de jogo: ${tipo}`)
    console.log(`Etapa do jogo: ${etapa}`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de Ingressos: ${quantidade}`)
}


function indetificaIngresso(publico, jogo, categoria,quantidade) {

    if (publico === "DO") {
        if(jogo === "SF"){
            if(categoria === 1){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:", quantidade)
                console.log("Valor total dos ingressos :  R$", quantidade * 1320.00)

            }else if(categoria === 2){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  R$",quantidade * 880.00)

            }else if(categoria === 3){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  R$",quantidade * 550.00)

            }else if(categoria === 4){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  R$",quantidade * 220.00)

            }

 //-------------------------------------------------------------------------------------DT--------------------------------------------------------------------------           
        }else if(jogo === "DT"){
            if(categoria === 1){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  R$",quantidade * 660.00)

            }else if(categoria === 2){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  R$",quantidade * 440.00)

            }else if(categoria === 3){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  R$",quantidade * 330.00)

            }else if(categoria === 4){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  R$",quantidade * 170.00)

            }

//-------------------------------------------------------------------------------FI---------------------------------------------------------------------------          
        }else if(jogo === "FI"){
            if(categoria === 1){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  R$",quantidade * 1980.00)

            }else if(categoria === 2){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  R$",quantidade * 1320.00)

            }else if(categoria === 3){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  R$",quantidade * 880.00)

            }else if(categoria === 4){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  R$",quantidade * 330.00)

            }
        }

    }else if(publico === "IN") {
        if(jogo === "SF"){
            if(categoria === 1){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  $",quantidade * (1320.00 * 4.10))

            }else if(categoria === 2){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  $",quantidade * (880.00 * 4.10))

            }else if(categoria === 3){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  $",quantidade * (550.00 * 4.10))

            }else if(categoria === 4){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  $",quantidade * (220.00 * 4.10))

            }

 //-------------------------------------------------------------------------------------DT IN--------------------------------------------------------------------------           
        }else if(jogo === "DT"){
            if(categoria === 1){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  $",quantidade * (660.00 * 4.10))

            }else if(categoria === 2){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  $",quantidade * (440.00 * 4.10))

            }else if(categoria === 3){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  $",quantidade * (330.00 * 4.10))

            }else if(categoria === 4){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  $",quantidade * (170.00 * 4.10))

            }

//-------------------------------------------------------------------------------FI IN---------------------------------------------------------------------------          
        }else if(jogo === "FI"){
            if(categoria === 1){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  $",quantidade * (1980.00 * 4.10))

            }else if(categoria === 2){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  $",quantidade * (1320.00 * 4.10))

            }else if(categoria === 3){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  $",quantidade * (880.00 * 4.10))

            }else if(categoria === 4){
                mostrandoTudo(nomeCompleto,tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)
                console.log("Valores")
                console.log("Quantidade de ingessos:",quantidade)
                console.log("Valor total dos ingressos :  $",quantidade * (330.00 * 4.10))

            }
        }

    }
}

    indetificaIngresso(tipoDeJogo,etapaDeJogo,categoriaJogo,quantidadeIngresso)




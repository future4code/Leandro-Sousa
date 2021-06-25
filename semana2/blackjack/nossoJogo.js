/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



    console.log("Boas vindas ao jogo de BlackJack!")

    function inicarRodada(){
      if(confirm("Quer iniciar uma nova rodada?")) {
       
      } else {
         console.log("O jogo acabou!")
      }
    }

   inicarRodada()
   
  const carta = comprarCarta()

  


  const cartasDoJogador =[comprarCarta(),comprarCarta()]
  const cartasDoComputador =[comprarCarta(),comprarCarta()]

  console.log(cartasDoJogador)
  console.log(cartasDoComputador)

  const somaDosValoresJogador = cartasDoJogador[0].valor + cartasDoJogador[1].valor
  const somaDosValoresComp = cartasDoComputador[0].valor + cartasDoComputador[1].valor

  console.log(somaDosValoresJogador)
  console.log(somaDosValoresComp)

  if(somaDosValoresJogador === somaDosValoresComp){
     console.log("Empate")
  } else if(somaDosValoresJogador > somaDosValoresComp) {
     console.log("O usuário ganhou!")
  } else {
     console.log("O computador ganhou!")
  }

  



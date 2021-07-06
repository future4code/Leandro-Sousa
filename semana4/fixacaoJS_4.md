ˋˋˋ
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
     const numeros = arrayDeNumeros.filter((num) => num === numeroEscolhido)
       
       if(numeros.length){
         return `O número ${numeroEscolhido} aparece ${numeros.length}x`
       }else{
         return `Número não encontrado`
       }
       
     }

ˋˋˋ
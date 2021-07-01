ˋˋˋ
function calculaNota(ex, p1, p2) {
  const nota1 = ex * 1 + p1 * 2 + p2 * 3
  const nota2 = 1 + 2 + 3
  const nota3 = nota1 / nota2
  
  if(nota3 >= 9){
    return "A"
  }else if(nota3 < 9 && nota3 >= 7.5){
  return "B"  
  }else if(nota3 <7.5 && nota3 >=6 ){
    return "C"
  }else if(nota3 < 6){
    return "D"
  }
}
ˋˋˋ
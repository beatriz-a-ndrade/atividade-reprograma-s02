//Questão 1: Solicite o preço de uma mercadoria e o percentual de desconto 20%.
//Exiba no console o valor do desconto e o preço a pagar.

let MercadoriaPreco = 500                  //Valor hipotético de determinada mercadoria.
const desconto20 = MercadoriaPreco * 0.20  //Valor fixo do desconto de 20% (20/100 = 0.20)  
let precoDesconto = (MercadoriaPreco - desconto20)

console.log(`Você recebeu um desconto no valor de R$${desconto20}. E o preço total a pagar será de R$${precoDesconto}.`)
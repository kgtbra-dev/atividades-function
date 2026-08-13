function CalcularDesconto(preco, percentual) {

    let ValorDesconto = preco * percentual / 100;
    return precoFinal = preco - ValorDesconto ;
    
}

 let ValorFinal = CalcularDesconto(200, 10);
 console.log(ValorFinal)
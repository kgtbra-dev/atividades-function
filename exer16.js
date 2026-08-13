function CalcularDsconto(preco, percentual) {

    let ValorDesconto = preco * percentual / 100;
    return precoFinal = preco - ValorDesconto ;
    
}

 let ValorFinal = CalcularDsconto(200, 10);
 console.log(ValorFinal)
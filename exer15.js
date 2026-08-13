function classificarNota(nota) {
    if (nota>=9) {
        console.log(" Exelente ")
    } else if (nota >= 7 ){
        console.log(" Bom ")
    } else if  (nota == 6) {
       console.log(" Aprovado")
    } else {
        console.log("reprovado")
    }
}
classificarNota(8)
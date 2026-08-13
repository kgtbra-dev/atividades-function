function VerificarAprovacao(media) {
    if (media>= 6) {
        return "aprovado"
    } else {
        return "Reprovado"
    }
    
}

console.log(VerificarAprovacao(7));
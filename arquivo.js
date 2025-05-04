
let backGround = document.querySelector("body")
let image = document.querySelector(".nike-1")

function mudarStyle(color, src) {

    backGround.style.background = color      // Aqui estiu trocando o background com o valor que está chegando no color,
                                            //cada vez que meu botão é clicado

    image.classList.add("trocaEfeito")     // aqui estou trazendo o efeito de dentro do meu css com o (add) a cada click do meu botão 

    setTimeout(() => {

        image.src = src                           // com o setTimeout eu digo em quanto tempo vai acontecer a troca de imagem, e também , 
                                                   // de quanto em quanto tempo o efeito "trocaEfeito vai durar"

        image.classList.remove("trocaEfeito")

    }, 500);



   



}
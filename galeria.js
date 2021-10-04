"use strict";

const imagens = [
    "./imagens/big.jpg",
    "./imagens/bobs.jpg",
    "./imagens/ciri.jpg",
    "./imagens/formiga.jpg",
    "./imagens/meme-nazare-tedesco.jpg",
    "./imagens/emoji.jpg",
    "./imagens/pao.jpg",
    "./imagens/unik.jpg"
]

const pegarId = (url) => {
    const posBarra = url.lastIndexOf("/") + 1 
    const posPonto = url.lastIndexOf(".") 
    return url.substring(posBarra, posPonto)
}


const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    const novoLink = document.createElement("a")
    novoLink.href = `#${pegarId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)
    
}

const carregarGaleria = (imgs) => imgs.forEach(criarItem)

const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const novaDiv = document.createElement("div")
    novaDiv.classList.add("slide")
    novaDiv.id = pegarId(urlImagem)

    const indiceAnterior = indice <= 0 ? arr.length - 1 : indice - 1
    const idAnterior =  pegarId(arr[indiceAnterior])

    const indiceProximo = indice >= arr.length - 1 ? 0 : indice + 1
    const idProximo = pegarId(arr[indiceProximo])

    novaDiv.innerHTML = `
            <div class="imagem-container">
                <a href="#" class="fechar"> &#128473; </a>
                <a href="#${idAnterior}" class="anterior"> &#171; </a>
                     <img src="${urlImagem}" alt=""> 
                <a href="#${idProximo}" class="proximo"> &#187; </a>
            </div>
    `

    container.appendChild(novaDiv)
}
     

const carregarSlide = (imgs) => imgs.forEach(criarSlide)

carregarGaleria(imagens)
carregarSlide(imagens)
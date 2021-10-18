"use strict";

// const limparElementos = (elemento) => {
//     while (elemento.firstChild){
//         elemento.removeChild(elemento.lastChild);
//     }
// };


const pesquisarImagens = async (evento) => {
    
    if(evento.key === 'Enter'){

    const filme = evento.target.value;
    const url = `https://api.tvmaze.com/episodes/${filme}`;
    const imagensResponse = await fetch(url);
    const imagens = await imagensResponse.json();
    console.log(imagens);

    // carregarGaleria(imagens.message);
    // carregarSlide(imagens.message);

    // limparElementos(document.querySelector('.galeria-container'));
    // limparElementos(document.querySelector('.slide-container'));


    // carregarSlide(imagens.message);
    // carregarGaleria(imagens.message);
    }   
 }

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
     

const carregarSlide = (imgs) => imgs.forEach(criarSlide);

document.querySelector('.pesquisa-container input')
.addEventListener('keypress', pesquisarImagens);
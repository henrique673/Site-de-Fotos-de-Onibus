
const imagens = Array.from(document.querySelectorAll(".secao img"));

const visualizador = document.getElementById("visualizador");
const imagemAmpliada = document.getElementById("imagemAmpliada");
const fechar = document.getElementById("fechar");
const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");

let indiceAtual = 0;

function mostrarImagem(indice) {
    indiceAtual = (indice + imagens.length) % imagens.length;

    imagemAmpliada.src = imagens[indiceAtual].src;
    imagemAmpliada.alt = imagens[indiceAtual].alt;

    visualizador.classList.add("ativo");
}

imagens.forEach((imagem, indice) => {
    imagem.addEventListener("click", () => {
        mostrarImagem(indice);
    });
});

anterior.addEventListener("click", () => {
    mostrarImagem(indiceAtual - 1);
});

proximo.addEventListener("click", () => {
    mostrarImagem(indiceAtual + 1);
});

fechar.addEventListener("click", () => {
    visualizador.classList.remove("ativo");
});

visualizador.addEventListener("click", (evento) => {
    if (evento.target === visualizador) {
        visualizador.classList.remove("ativo");
    }
});

document.addEventListener("keydown", (evento) => {
    if (!visualizador.classList.contains("ativo")) return;

    if (evento.key === "Escape") {
        visualizador.classList.remove("ativo");
    }

    if (evento.key === "ArrowRight") {
        mostrarImagem(indiceAtual + 1);
    }

    if (evento.key === "ArrowLeft") {
        mostrarImagem(indiceAtual - 1);
    }
});

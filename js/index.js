const botao_tema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagem_tema = document.querySelector(".imagem-botao");


botao_tema.addEventListener("click",() => {

        const modo_escuro_ativo = body.classList.contains("modo-escuro");

        body.classList.toggle("modo-escuro")
    
        if (modo_escuro_ativo == true) {

            imagem_tema.setAttribute('src', "./imagens/sun.png");

        } else {

            imagem_tema.setAttribute("src", "./imagens/moon.png");
        }

   
});



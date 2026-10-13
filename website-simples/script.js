// This file is intentionally left blank.

document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("saudacaoBtn");
    const mensagem = document.getElementById("mensagem");

    if (botao && mensagem) {
        botao.addEventListener("click", () => {
            const data = new Date();
            mensagem.textContent = `Olá! Hoje é ${data.toLocaleDateString("pt-BR")}. Seja bem-vindo ao meu site!`;
            botao.textContent = "Clique novamente";
        });
    }
});
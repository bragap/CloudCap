let notificacoes = [
    {
        id: 1,
        titulo: "Contas a pagar",
        mensagem: "Você ainda não pagou esta conta ... !",
        data: 2023 - 04 - 27
    },
    {
        id: 2,
        titulo: "Alerta de saldo baixo",
        mensagem: "Seu saldo está em ...",
        data: 2023 - 04 - 26
    },
    {
        id: 3,
        titulo: "Metas",
        mensagem: "Sua meta ... (não) foi atingida!",
        data: 2023 - 04 - 25
    },
    {
        id: 4,
        titulo: "Alerta de orçamento",
        mensagem: "Você tem um orçamento disponível!",
        data: 2023 - 04 - 25
    }
];

function openPopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "block"; // Exibe o pop-up
}

function closePopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "none"; // Oculta o pop-up
}

function atualizaNotificacoes() {
    let lista = document.getElementById("notificacoes");
    lista.innerHTML = ""
    for (let notificacao of notificacoes) {
        container = document.createElement("div");
        titulo = document.createElement("h4");
        titulo.innerHTML = notificacao.titulo;
        mensagem = document.createElement("p");
        mensagem.innerHTML = notificacao.mensagem;
        container.appendChild(titulo);
        container.appendChild(mensagem);
        lista.appendChild(container);
    }
}

function limpaNotificacoes() {
    notificacoes = [];
    atualizaNotificacoes();
}
atualizaNotificacoes();
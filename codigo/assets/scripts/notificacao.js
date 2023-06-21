let notificacoes = [];
function leDados() {
    let strDados = localStorage.getItem('metas');
    if(strDados) {
        notificacoes = JSON.parse(strDados);
        console.log(notificacoes)
    }
}

        
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
        titulo.innerHTML = notificacao.nome;
        mensagem = document.createElement("p");
        mensagem.innerHTML = notificacao.descricao;
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
var biblioteca = {
    "livros": [
      {
        "id": "1",
        "tema": "Finanças",
        "tipo": "Artigo | SEBRAE | Português",
        "imagem": "gestaopequenonegocio.jpg",
        "nome": "Como fazer a gestão financeira do pequeno negócio. | Investimentos e Crises.",
        "link": "https://sebrae.com.br/sites/PortalSebrae/artigos/como-fazer-a-gestao-financeira-do-pequeno-negocio,d999a442d2e5a410VgnVCM1000003b74010aRCRD"
  
      },
      {
        "id": "2",
        "tema": "Educação Financeira",
        "tipo": "Podcast | Spotify | G1 | Português",
        "imagem": "financiamentocreditocaro.jpg",
        "nome": "Crédito está caro: como ficam financiamentos e empréstimos.",
        "link": "https://open.spotify.com/episode/5f4KrY25VVmGP68RcsMMfN?si=JhpQsqV_QKih6ucqkoEHQg"
      },
      {
        "id": "3",
        "tema": "Vendas",
        "tipo": "Artigo | SEBRAE | Português",
        "imagem": "marketingdigital.jpg",
        "nome": "Importância do marketing digital nas redes sociais da pequena empresa.",
        "link": "https://sebrae.com.br/sites/PortalSebrae/importancia-do-marketing-digital-nas-redes-sociais-da-pequena-empresa,21cb6ae54f417810VgnVCM1000001b00320aRCRD"
      },
      {
        "id": "4",
        "tema": "Finanças",
        "tipo": "E-Book | SEBRAE | Português",
        "imagem": "curvaabcefluxodecaixa.jpg",
        "nome": "Fluxo de caixa e Curva ABC do produto. | Aprenda e melhore sua gestão.",
        "link": "https://sebrae.com.br/sites/PortalSebrae/arquivos/fluxo-de-caixa-e-curva-abc-do-produto,a9663256cb597810VgnVCM1000001b00320aRCRD"
  
      },
      {
        "id": "5",
        "tema": "Finanças",
        "tipo": "Vídeos | SEBRAE | Português",
        "imagem": "emitirnotasfiscais.jpg",
        "nome": "Como emitir Notas Fiscais. | Uma série de vídeos sobre o tema.",
        "link": "https://sebrae.com.br/sites/PortalSebrae/produtoseservicos/emissornfe/os-servicos-disponiveis-no-novo-emissor,f1883256cb597810VgnVCM1000001b00320aRCRD"
  
      },
      {
        "id": "6",
        "tema": "Finanças",
        "tipo": "Artigo | SEBRAE | Português",
        "imagem": "conhecendolinhasdecredito.jpg",
        "nome": "Conheça as linhas de crédito disponíveis para MEI.",
        "link": "https://sebrae.com.br/sites/PortalSebrae/artigos/conheca-as-linhas-de-credito-disponiveis-para-mei,cb7b198074952810VgnVCM100000d701210aRCRD"
  
      },
      {
        "id": "7",
        "tema": "Educação Financeira",
        "tipo": "Podcast | Spotify | G1 | Português",
        "imagem": "investierrado.jpg",
        "nome": "Investi errado, e agora? | Participação da Sharon Halpern.",
        "link": "https://open.spotify.com/episode/22QFVvdBdeFOWd0EZ18B2x?si=0YqOBv6zQSOpvDh4nbf6Qw"
  
      },
      {
        "id": "8",
        "tema": "Finanças",
        "tipo": "Artigo | SEBRAE | Português",
        "imagem": "garantiadecredito.jpg",
        "nome": "Conheça uma opção de garantia de crédito para pequenos negócios.",
        "link": "https://sebrae.com.br/sites/PortalSebrae/artigos/conheca-opcoes-de-garantia-de-credito-para-pequenos-negocios,a6dea442d2e5a410VgnVCM1000003b74010aRCRD"
  
      },
      {
        "id": "9",
        "tema": "Educação Financeira",
        "tipo": "Podcast | Spotify | G1 | Português",
        "imagem": "vendasmarketplace.jpg",
        "nome": "Lições para entrar - e arrasar nas vendas - em um marketplace.",
        "link": "https://open.spotify.com/episode/58GOtrjuczXrTz2jh4OfpQ?si=mkToX9YXSCa_fll3mnvVtw"
  
      },
      {
        "id": "10",
        "tema": "Planejamento",
        "tipo": "Artigo | SEBRAE | Português",
        "imagem": "iniciarumnegocio.jpg",
        "nome": "Como se preparar para iniciar um negócio: Reflexão, planejamento e custos.",
        "link": "https://sebrae.com.br/sites/PortalSebrae/artigos/como-se-preparar-para-iniciar-um-negocio,a63555c941726810VgnVCM1000001b00320aRCRD"
  
      },
      {
        "id": "11",
        "tema": "Planejamento",
        "tipo": "Artigo | SEBRAE | Português",
        "imagem": "expandirempresa.jpg",
        "nome": "Quer expandir a sua empresa? Saiba como fazer.",
        "link": "https://sebrae.com.br/sites/PortalSebrae/artigos/quer-expandir-a-sua-empresa-saiba-como-fazer,cd35eef40ce06810VgnVCM1000001b00320aRCRD"
  
      },
      {
        "id": "12",
        "tema": "Planejamento",
        "tipo": "Artigo | SEBRAE | Português",
        "imagem": "planejamentofinanceiro.jpg",
        "nome": "O que é um planejamento empresarial? | Esteja preparado para qualquer adversidade.",
        "link": "https://sebrae.com.br/sites/PortalSebrae/artigos/o-que-e-um-planejamento-empresarial,8ba3b543515d2810VgnVCM100000d701210aRCRD"
  
      }
    ]
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const filtroTema = document.getElementById("filtro-tema");
    const filtroTipo = document.getElementById("filtro-tipo");
    const cardsContainer = document.getElementById("cards-container");
  
    function exibirCards() {
      cardsContainer.innerHTML = "";
  
      const temaFiltrado = filtroTema.value;
      const tipoFiltrado = filtroTipo.value;
  
      const cardsFiltrados = biblioteca.livros.filter(function (livro) {
        if ((temaFiltrado && temaFiltrado !== livro.tema) || (tipoFiltrado && tipoFiltrado !== livro.tipo)) {
          return false;
        }
  
        return true;
      });
  
      cardsFiltrados.forEach(function (livro) {
        const card = document.createElement("col");
        card.classList.add("col-lg-3", "col-md-6", "col-sm-12", "card");
  
        card.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${livro.tema}</h5>
            <p class="card-text">${livro.tipo}</p>
            <div class="ratio ratio-1x1">
              <img src="./assets/images/${livro.imagem}" class="card-img-top" style="object-fit: contain;">
            </div>
            <div class="content">
              <p class="card-nome">${livro.nome}</p>
              <a href="${livro.link}" class="btn btn-outline-primary w-100">Leia aqui</a>
            </div>
          </div>
        `;
  
        cardsContainer.appendChild(card);
      });
    }
  
    filtroTema.addEventListener("change", exibirCards);
    filtroTipo.addEventListener("change", exibirCards);
  
  });
  
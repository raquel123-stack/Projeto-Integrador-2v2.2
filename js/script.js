// Locais informados para o protótipo. Os marcadores ficam no bairro aproximado,
// pois as coordenadas exatas de cada endereço ainda precisam ser verificadas.
const locais = [
  { id: 1, nome: "Jeni Brechó", categoria: "Brechó", bairro: "Itaquari", endereco: "Rua Fernando de Sá, 35 – Itaquari, Cariacica – ES", horario: "Consultar horários pelo Instagram @jenibrecho", contato: "https://www.instagram.com/jenibrecho/", lat: -20.322, lng: -40.369, descricao: "Horário a confirmar diretamente com o estabelecimento." },
  { id: 2, nome: "Vitória Flori Brechó", categoria: "Brechó", bairro: "Itaquari", endereco: "Rua Presidente Wenceslau Braz, 768 – Itaquari, Cariacica – ES", horario: "Segunda a sexta: 9h às 17h; sábado: 9h às 13h", contato: "", lat: -20.322, lng: -40.369, descricao: "Confira os horários antes de visitar." },
  { id: 3, nome: "BRECHOCHIC Kátia Rodrigues", categoria: "Brechó", bairro: "Porto Novo", endereco: "Rua Manoel Siqueira, 986 – Porto Novo, Cariacica – ES", horario: "Terça a sexta: 9h30 às 18h; sábado: 7h às 14h30", contato: "", lat: -20.333, lng: -40.365, descricao: "Confira os horários antes de visitar." },
  { id: 4, nome: "Espaço da Bell Brechó", categoria: "Brechó", bairro: "Jardim América", endereco: "Rua Hermes Santório, 42 – Jardim América, Cariacica – ES", horario: "Segunda a sexta: 9h às 18h30; sábado: 9h às 15h", contato: "", lat: -20.337, lng: -40.363, descricao: "Confira os horários antes de visitar." },
  { id: 5, nome: "Reobote Brechó", categoria: "Brechó", bairro: "Oriente", endereco: "Rua Senador Eurico Resende, 28 – Oriente, Cariacica – ES", horario: "Horário a confirmar", contato: "", lat: -20.323, lng: -40.376, descricao: "Confirme os horários antes de visitar." },

  { id: 6, nome: "Feira livre de Santana", categoria: "Feira", bairro: "Santana", endereco: "Santana, Cariacica – ES", horario: "Terça-feira, das 6h às 12h", contato: "", lat: -20.309, lng: -40.382, descricao: "Ponto aproximado do bairro; confirme o local exato da feira." },
  { id: 7, nome: "Feira livre de Porto de Santana", categoria: "Feira", bairro: "Porto de Santana", endereco: "Porto de Santana, Cariacica – ES", horario: "Quarta-feira pela manhã; horário a confirmar", contato: "", lat: -20.309, lng: -40.361, descricao: "Turno da manhã; horário exato não informado." },
  { id: 8, nome: "Feira livre de Vera Cruz", categoria: "Feira", bairro: "Vera Cruz", endereco: "Vera Cruz, Cariacica – ES", horario: "Quarta-feira pela manhã; horário a confirmar", contato: "", lat: -20.312, lng: -40.381, descricao: "Turno da manhã; horário exato não informado." },
  { id: 9, nome: "Feira livre de Rio Marinho", categoria: "Feira", bairro: "Rio Marinho", endereco: "Rio Marinho, Cariacica – ES", horario: "Quarta-feira à tarde; horário a confirmar", contato: "", lat: -20.365, lng: -40.405, descricao: "Turno da tarde; horário exato não informado." },
  { id: 10, nome: "Feira livre de Campo Verde", categoria: "Feira", bairro: "Campo Verde", endereco: "Campo Verde, Cariacica – ES", horario: "Quarta-feira à tarde; horário a confirmar", contato: "", lat: -20.362, lng: -40.384, descricao: "Turno da tarde; horário exato não informado." },
  { id: 11, nome: "Feira livre de Cariacica-Sede", categoria: "Feira", bairro: "Cariacica-Sede", endereco: "Cariacica-Sede, Cariacica – ES", horario: "Quinta-feira pela manhã; horário a confirmar", contato: "", lat: -20.278, lng: -40.421, descricao: "Turno da manhã; horário exato não informado." },
  { id: 12, nome: "Feira livre de Alto Lage", categoria: "Feira", bairro: "Alto Lage", endereco: "Alto Lage, Cariacica – ES", horario: "Quinta-feira pela manhã; horário a confirmar", contato: "", lat: -20.322, lng: -40.373, descricao: "Turno da manhã; horário exato não informado." },
  { id: 13, nome: "Feira livre de Flexal I", categoria: "Feira", bairro: "Flexal I", endereco: "Flexal I, Cariacica – ES", horario: "Quinta-feira pela manhã; horário a confirmar", contato: "", lat: -20.301, lng: -40.352, descricao: "Turno da manhã; horário exato não informado." },
  { id: 14, nome: "Feira livre de Bela Aurora", categoria: "Feira", bairro: "Bela Aurora", endereco: "Bela Aurora, Cariacica – ES", horario: "Quinta-feira à tarde; horário a confirmar", contato: "", lat: -20.339, lng: -40.391, descricao: "Turno da tarde; horário exato não informado." },
  { id: 15, nome: "Feira livre de Campina Grande", categoria: "Feira", bairro: "Campina Grande", endereco: "Campina Grande, Cariacica – ES", horario: "Quinta-feira à tarde; horário a confirmar", contato: "", lat: -20.355, lng: -40.402, descricao: "Turno da tarde; horário exato não informado." },
  { id: 16, nome: "Feira orgânica de Alto Lage", categoria: "Feira", bairro: "Alto Lage", endereco: "Em frente à Prefeitura, Alto Lage, Cariacica – ES", horario: "Quinta-feira, das 16h às 19h", contato: "", lat: -20.322, lng: -40.373, descricao: "Feira orgânica informada como situada em frente à prefeitura; confirme o ponto exato." },
  { id: 17, nome: "Feira livre de Nova Brasília", categoria: "Feira", bairro: "Nova Brasília", endereco: "Nova Brasília, Cariacica – ES", horario: "Sexta-feira pela manhã; horário a confirmar", contato: "", lat: -20.334, lng: -40.405, descricao: "Turno da manhã; horário exato não informado." },
  { id: 18, nome: "Feira livre de Bandeirantes", categoria: "Feira", bairro: "Bandeirantes", endereco: "Bandeirantes, Cariacica – ES", horario: "Sexta-feira à tarde; horário a confirmar", contato: "", lat: -20.302, lng: -40.383, descricao: "Turno da tarde; horário exato não informado." },
  { id: 19, nome: "Feira livre de Jardim América", categoria: "Feira", bairro: "Jardim América", endereco: "Jardim América, Cariacica – ES", horario: "Sábado pela manhã; horário a confirmar", contato: "", lat: -20.337, lng: -40.363, descricao: "Turno da manhã; horário exato não informado." },
  { id: 20, nome: "Feira livre de Porto Novo", categoria: "Feira", bairro: "Porto Novo", endereco: "Porto Novo, Cariacica – ES", horario: "Sábado pela manhã; horário a confirmar", contato: "", lat: -20.333, lng: -40.365, descricao: "Turno da manhã; horário exato não informado." },
  { id: 21, nome: "Feira livre de Mucuri", categoria: "Feira", bairro: "Mucuri", endereco: "Mucuri, Cariacica – ES", horario: "Sábado pela manhã; horário a confirmar", contato: "", lat: -20.324, lng: -40.391, descricao: "Turno da manhã; horário exato não informado." },
  { id: 22, nome: "Feira livre de Santa Cecília", categoria: "Feira", bairro: "Santa Cecília", endereco: "Santa Cecília, Cariacica – ES", horario: "Sábado pela manhã; horário a confirmar", contato: "", lat: -20.303, lng: -40.402, descricao: "Turno da manhã; horário exato não informado." },
  { id: 23, nome: "Feira livre de Itacibá", categoria: "Feira", bairro: "Itacibá", endereco: "Itacibá, Cariacica – ES", horario: "Sábado à tarde; horário a confirmar", contato: "", lat: -20.311, lng: -40.361, descricao: "Turno da tarde; horário exato não informado." },
  { id: 24, nome: "Feira livre de Castelo Branco", categoria: "Feira", bairro: "Castelo Branco", endereco: "Castelo Branco, Cariacica – ES", horario: "Sábado à tarde; horário a confirmar", contato: "", lat: -20.334, lng: -40.391, descricao: "Turno da tarde; horário exato não informado." },
  { id: 25, nome: "Feira livre de Campo Grande", categoria: "Feira", bairro: "Campo Grande", endereco: "Campo Grande, Cariacica – ES", horario: "Domingo pela manhã; horário a confirmar", contato: "", lat: -20.351, lng: -40.383, descricao: "Turno da manhã; horário exato não informado." },
  { id: 26, nome: "Feira livre de Itapemirim", categoria: "Feira", bairro: "Itapemirim", endereco: "Itapemirim, Cariacica – ES", horario: "Domingo pela manhã; horário a confirmar", contato: "", lat: -20.361, lng: -40.374, descricao: "Turno da manhã; horário exato não informado." },
  { id: 27, nome: "Feira livre de Nova Rosa da Penha I", categoria: "Feira", bairro: "Nova Rosa da Penha I", endereco: "Nova Rosa da Penha I, Cariacica – ES", horario: "Domingo pela manhã; horário a confirmar", contato: "", lat: -20.291, lng: -40.345, descricao: "Turno da manhã; horário exato não informado." }
];

const pesquisa = document.querySelector("#pesquisa");
const filtroCategoria = document.querySelector("#filtroCategoria");
const listaLocais = document.querySelector("#listaLocais");
const contagem = document.querySelector("#contagem");
const limparFiltros = document.querySelector("#limparFiltros");
const formSugestao = document.querySelector("#formSugestao");
const mensagemFormulario = document.querySelector("#mensagemFormulario");

let mapa;
let marcadores = [];

function iniciarMapa() {
  mapa = L.map("mapaInterativo").setView([-20.329, -40.383], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
  }).addTo(mapa);
}

function iconeCategoria(categoria) {
  return ({ "Brechó": "👕", "Feira": "🧺", "Bazar": "🛍️", "Artesanato": "🎨" })[categoria] || "📍";
}

function criarCartao(local) {
  const cartao = document.createElement("article");
  cartao.className = "cartao-local";
  const topo = document.createElement("div");
  topo.className = "cartao-topo";
  const icone = document.createElement("div");
  icone.className = "icone-local";
  icone.setAttribute("aria-hidden", "true");
  icone.textContent = iconeCategoria(local.categoria);
  const tituloBloco = document.createElement("div");
  const titulo = document.createElement("h3");
  titulo.textContent = local.nome;
  const categoria = document.createElement("span");
  categoria.className = "categoria";
  categoria.textContent = local.categoria;
  tituloBloco.append(titulo, categoria);
  topo.append(icone, tituloBloco);

  const detalhes = document.createElement("div");
  detalhes.className = "detalhes-local";
  const endereco = document.createElement("p");
  endereco.textContent = `📍 ${local.endereco}`;
  const horario = document.createElement("p");
  horario.textContent = `◷ ${local.horario}`;
  detalhes.append(endereco, horario);
  if (local.contato) {
    const contato = document.createElement("p");
    const link = document.createElement("a");
    link.href = local.contato;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Instagram do estabelecimento ↗";
    contato.append(link);
    detalhes.append(contato);
  }

  const acoes = document.createElement("div");
  acoes.className = "acoes-cartao";
  const rota = document.createElement("a");
  rota.className = "link-rota";
  rota.href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(local.endereco)}`;
  rota.target = "_blank";
  rota.rel = "noopener noreferrer";
  rota.textContent = "Como chegar ↗";

  const verMapa = document.createElement("button");
  verMapa.className = "botao-detalhes";
  verMapa.type = "button";
  verMapa.textContent = "Ver no mapa";
  verMapa.addEventListener("click", () => {
    mapa.setView([local.lat, local.lng], 15);
    const marcador = marcadores.find(item => item.localId === local.id);
    if (marcador) marcador.openPopup();
    document.querySelector("#mapa").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  acoes.append(rota, verMapa);
  cartao.append(topo, detalhes, acoes);
  return cartao;
}

function obterLocaisFiltrados() {
  const termo = pesquisa.value.trim().toLocaleLowerCase("pt-BR");
  const categoriaEscolhida = filtroCategoria.value;
  return locais.filter(local => {
    const textoLocal = `${local.nome} ${local.bairro} ${local.endereco} ${local.categoria} ${local.horario}`.toLocaleLowerCase("pt-BR");
    return textoLocal.includes(termo) && (categoriaEscolhida === "todos" || local.categoria === categoriaEscolhida);
  });
}

function atualizarResultados() {
  const resultados = obterLocaisFiltrados();
  listaLocais.replaceChildren();
  marcadores.forEach(marcador => mapa.removeLayer(marcador));
  marcadores = [];

  if (!resultados.length) {
    const mensagem = document.createElement("div");
    mensagem.className = "sem-resultados";
    mensagem.textContent = "Nenhum local encontrado. Tente outro termo ou limpe os filtros.";
    listaLocais.append(mensagem);
  } else {
    resultados.forEach(local => {
      listaLocais.append(criarCartao(local));
      const marcador = L.marker([local.lat, local.lng]).addTo(mapa);
      marcador.localId = local.id;
      const popup = document.createElement("div");
      const nome = document.createElement("strong");
      nome.textContent = local.nome;
      const tipo = document.createElement("p");
      tipo.textContent = `${local.categoria} • ${local.bairro}`;
      const hora = document.createElement("p");
      hora.textContent = local.horario;
      const aviso = document.createElement("small");
      aviso.textContent = "Marcador aproximado do bairro.";
      popup.append(nome, tipo, hora, aviso);
      marcador.bindPopup(popup);
      marcadores.push(marcador);
    });
    if (resultados.length > 1) mapa.fitBounds(L.featureGroup(marcadores).getBounds().pad(0.18), { maxZoom: 14 });
    else mapa.setView([resultados[0].lat, resultados[0].lng], 14);
  }
  contagem.textContent = `${resultados.length} ${resultados.length === 1 ? "local encontrado" : "locais encontrados"}`;
}

pesquisa.addEventListener("input", atualizarResultados);
filtroCategoria.addEventListener("change", atualizarResultados);
limparFiltros.addEventListener("click", () => {
  pesquisa.value = "";
  filtroCategoria.value = "todos";
  atualizarResultados();
});

formSugestao.addEventListener("submit", event => {
  event.preventDefault();
  const dados = new FormData(formSugestao);
  const nome = String(dados.get("nomeLocal") || "").trim();
  if (!nome) {
    mensagemFormulario.textContent = "Preencha o nome do local para continuar.";
    return;
  }
  mensagemFormulario.textContent = "Demonstração concluída! Para receber e guardar sugestões de verdade, este formulário precisa ser conectado a um backend e banco de dados.";
  formSugestao.reset();
});

if (typeof L !== "undefined") {
  iniciarMapa();
  atualizarResultados();
} else {
  document.querySelector("#mapaInterativo").textContent = "Não foi possível carregar o mapa. Confira sua conexão com a internet e recarregue a página.";
  atualizarResultados = () => {};
}

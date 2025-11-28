var botaoAdicionar = document.querySelector("#adicionar");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#AddEncomendas");
  var novaEncomenda = obtemEncomenda(form);

  // Validação antes de adicionar
  if (!validaEncomenda(novaEncomenda)) {
      alert("Corrija os erros antes de adicionar!");
      return; // ❌ impede de adicionar
  }

  adicionaEncomendaTabela(novaEncomenda);
  form.reset(); 
});

// -----------------------------

function adicionaEncomendaTabela(novaEncomenda) {
  var tabela = document.querySelector("#Tabela_cliente");
  tabela.appendChild(montaTR(novaEncomenda));
}

function obtemEncomenda(formulario) {
  return {
    nome: formulario.nome.value.trim(),
    produto: formulario.produto.value,
    Quantidade: formulario.Quantidade.value,
    Valor_uni: formulario.Valor_uni.value
  };
}

// -----------------------------
// 🚨 VALIDAÇÃO COMPLETA
// -----------------------------
function validaEncomenda(e) {

  // Nome vazio
  if (e.nome.length === 0) return false;

  // Produto ainda nas "opções"
  if (e.produto === "opcoes") return false;

  // Quantidade inválida
  let q = Number(e.Quantidade);
  if (isNaN(q) || q < 1) return false;

  // Valor unitário inválido
  let v = Number(e.Valor_uni);
  if (isNaN(v) || v < 1) return false;

  return true;
}

// -----------------------------

function montaTR(dados) {
  var linha = document.createElement("tr");

  linha.appendChild(montaTD(dados.nome));
  linha.appendChild(montaTD(dados.produto));
  linha.appendChild(montaTD(dados.Quantidade));
  linha.appendChild(montaTD(dados.Valor_uni));
  linha.appendChild(montaTD(CTotal(dados.Quantidade, dados.Valor_uni)));

  return linha;
}

function montaTD(valor) {
  var coluna = document.createElement("td");
  coluna.textContent = valor;
  return coluna;
}

function CTotal(qtd, valor) {
  return Number(qtd) * Number(valor);
}

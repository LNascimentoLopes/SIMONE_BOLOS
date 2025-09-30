var botaoAdicionar = document.querySelector("#adicionar");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#AddEncomendas");

  var novaEncomenda = obtemEncomenda(form);
  adicionaEncomendaTabela(novaEncomenda);
  //var tabela = document.querySelector("#Tabela_cliente");
  
 // tabela.appendChild(montaTR(novaEncomenda));
 
  form.requestFullscreen();
});

function adicionaEncomendaTabela(novaEncomenda){
   var tabela = document.querySelector("#Tabela_cliente");
  
  tabela.appendChild(montaTR(novaEncomenda));
}

function obtemEncomenda(formulario) {
  var encomenda = {
    nome: formulario.nome.value,
    produto: formulario.produto.value,
    Quantidade: formulario.Quantidade.value,
    Valor_uni: formulario.Valor_uni.value
  };
  return encomenda;
}

function montaTR(DadosNovaEncomenda) {
  var linha = document.createElement("tr");

  linha.appendChild(montaTD(DadosNovaEncomenda.nome));
  linha.appendChild(montaTD(DadosNovaEncomenda.produto));
  linha.appendChild(montaTD(DadosNovaEncomenda.Quantidade));
  linha.appendChild(montaTD(DadosNovaEncomenda.Valor_uni));
  linha.appendChild(montaTD(CTotal(DadosNovaEncomenda.Quantidade,DadosNovaEncomenda.Valor_uni)));

  return linha;
}

function montaTD(dadoColuna) {
  var coluna = document.createElement("td");
  coluna.textContent = dadoColuna;
  return coluna;
}

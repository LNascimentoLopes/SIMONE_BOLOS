document.querySelector("#api-encomenda").addEventListener("click", () => {

  fetch("https://lnascimentolopes.github.io/SIMONE_BOLOS/servidor_API/encomendas.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(encomendaAPI => {
        adicionaEncomendaTabela(encomendaAPI);
      });
    })
    .catch(error => {
      console.error("Erro ao carregar JSON:", error);
    });

});

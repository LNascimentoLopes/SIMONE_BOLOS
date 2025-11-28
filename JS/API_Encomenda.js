var botaoAPI = document.querySelector("#api-encomenda");

botaoAPI.addEventListener("click", function() {

    fetch("https://LNascimentoLopes.github.io/SIMONE_BOLOS/encomendas.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro: " + response.status);
            }
            return response.json();
        })
        .then(resposta => {
            resposta.forEach(function(encomendaAPI) {
                adicionaEncomendaTabela(encomendaAPI);
            });
        })
        .catch(err => console.error("Erro ao carregar JSON:", err));
});



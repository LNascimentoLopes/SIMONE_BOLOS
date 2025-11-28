var botaoAPI = document.querySelector("#api-encomenda");

botaoAPI.addEventListener("click", function() {
    var api = new XMLHttpRequest();
    api.open("GET", "https://LNascimentoLopes.github.io/SIMONE_BOLOS/encomendas.json");

    api.addEventListener("load", function() {

        if (api.status == 200) {
            var resposta = JSON.parse(api.responseText);

            resposta.forEach(function(encomendaAPI) {
                adicionaEncomendaTabela(encomendaAPI);
            });

        } else {
            console.error("Erro ao carregar JSON:", api.status, api.responseText);
        }
    });

    api.send();
});

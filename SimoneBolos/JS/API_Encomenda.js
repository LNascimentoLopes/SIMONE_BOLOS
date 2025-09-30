var BotaoApi = document.querySelector("#api-encomenda");

BotaoApi,addEventListener("click",function(){
    var api = new XMLHttpRequest();
    api.open("GET", "http://localhost:3000/encomendas_web");

    api.addEventListener("load",function(){
        var resposta = JSON.parse(api.responseText);

        resposta.forEach(function(encomendaAPI){adicionaEncomendaTabela(encomendaAPI)})
    })
    api.send();
})
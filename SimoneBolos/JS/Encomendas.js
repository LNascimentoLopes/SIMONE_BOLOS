var Clientes = document.querySelectorAll(".Cliente");

for (let cont = 0; cont < Clientes.length; cont++) {
    let qElement = Clientes[cont].querySelector(".Quantidade");
    let vElement = Clientes[cont].querySelector(".Valor_uni");
    let tElement = Clientes[cont].querySelector(".Total");

    let q = parseFloat(qElement.textContent);
    let v = parseFloat(vElement.textContent);

    let valido = true;

    // Validação da quantidade
    if (isNaN(q) || q < 1) {
        qElement.textContent = "Quantidade inválida";
        Clientes[cont].style.color = "white";
        Clientes[cont].style.backgroundColor = "red";
        valido = false;
    }

    // Validação do valor unitário
    if (isNaN(v) || v < 1) {
        vElement.textContent = "Valor inválido";
        Clientes[cont].style.color = "white";
        Clientes[cont].style.backgroundColor = "red";
        valido = false;
    } else {
        // Se for válido, já mostra formatado em R$
        vElement.textContent = v.toLocaleString("pt-BR", { 
            style: "currency", 
            currency: "BRL" 
        });
    }

    // Calcula o total somente se tudo for válido
    if (valido) {
        tElement.textContent = CTotal(q, v);
    }
}

function CTotal(qtd, unit) {
    let T = qtd * unit;
    // Retorna formatado em reais
    return T.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
var linhas = document.querySelectorAll(".Cliente");

linhas.forEach(linha => {
    const qEl = linha.querySelector(".Quantidade");
    const vEl = linha.querySelector(".Valor_uni");
    const tEl = linha.querySelector(".Total");

    // valores numéricos ORIGINAIS
    const q = Number(qEl.textContent);
    const v = Number(vEl.textContent);

    let valido = true;

    // valida quantidade
    if (isNaN(q) || q < 1) {
        qEl.textContent = "Quantidade inválida";
        linha.style.backgroundColor = "red";
        linha.style.color = "white";
        valido = false;
    }

    // valida valor unitário
    if (isNaN(v) || v < 1) {
        vEl.textContent = "Valor inválido";
        linha.style.backgroundColor = "red";
        linha.style.color = "white";
        valido = false;
    }

    if (!valido) return;

    // formata valor unitário
    vEl.textContent = v.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    // total formatado
    const total = q * v;

    tEl.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
});

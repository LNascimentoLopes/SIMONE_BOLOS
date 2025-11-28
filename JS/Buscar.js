var CampoFiltro = document.querySelector("#filtrar-tabela");

CampoFiltro.addEventListener("input", function () {
  var clientes = document.querySelectorAll(".Cliente");
  if (this.value.length > 0) {
    for (var cli = 0; cli < Clientes.length; cli++) {
      var Cliente = Clientes[cli];
      var nome = Cliente.querySelector(".nome").textContent;
      var expressao = new RegExp(this.value, "i");

      if (!expressao.test(nome)) {
        Cliente.classList.add("invisivel");
      } else {
        Cliente.classList.remove("invisivel");
      }
    }
  }
});

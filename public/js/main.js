window.onload = function () {
  const desligarCalculadora = document.getElementById("btnOff");
  const iniciarCalculo = document.getElementById("btnOn");
  const botoesCalculadora = document.querySelectorAll(".padrao-btn");
  const displayCalculadora = document.getElementById("visorCalculadora");

  // ligar calculadora ou zerar display
  iniciarCalculo.addEventListener("click", function () {
    // displayCalculadora.value = "0";
    displayCalculadora.value = "";

    for (let i = 0; i < botoesCalculadora.length; i++) {
      botoesCalculadora[i].removeAttribute("disabled");
    }
  });

  // desligar calculador e desabilitar botões
  desligarCalculadora.addEventListener("click", function () {
    displayCalculadora.value = "OFF";

    for (let i = 0; i < botoesCalculadora.length; i++) {
      botoesCalculadora[i].setAttribute("disabled", true);
    }
  });
};

// responsável por realizar as operaões
function areaDeCalculo(n1) {
  calculadoraClassica.visorCalculadora.value = calculadoraClassica.visorCalculadora.value + n1;
}

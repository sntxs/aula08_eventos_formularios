const botaoBuscar = document.querySelector("#btn-buscar");
const saida = document.querySelector("#saida");
const status = document.querySelector("#status");

botaoBuscar.addEventListener("click", function () {
  status.textContent = "Buscando dados...";
  status.className = "alert alert-info mt-3";
  saida.textContent = "Aguarde...";

  // fetch faz uma requisição HTTP para o endpoint informado.
  // Quando nenhum method é informado, o padrão é GET.
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (resposta) {
      // response.ok permite verificar se o status HTTP indica sucesso.
      if (!resposta.ok) {
        throw new Error("A API respondeu com erro.");
      }

      // json() lê o corpo e transforma o JSON em objeto JavaScript.
      return resposta.json();
    })
    .then(function (dados) {
      // JSON.stringify transforma o objeto em texto para ser mostrado no pre.
      saida.textContent = JSON.stringify(dados, null, 2);
      status.textContent = "GET realizado com sucesso.";
      status.className = "alert alert-success mt-3";
    })
    .catch(function (erro) {
      // catch executa quando há falha na requisição ou no processamento.
      saida.textContent = erro.message;
      status.textContent = "Não foi possível consultar a API.";
      status.className = "alert alert-danger mt-3";
    });
});

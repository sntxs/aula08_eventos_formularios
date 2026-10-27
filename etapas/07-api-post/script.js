const formulario = document.querySelector("#form-post");
const campoTitulo = document.querySelector("#titulo");
const campoConteudo = document.querySelector("#conteudo");
const status = document.querySelector("#status");
const saida = document.querySelector("#saida");

formulario.addEventListener("submit", function (evento) {
  // Impede o recarregamento para podermos controlar o envio com JavaScript.
  evento.preventDefault();

  // Criamos um objeto com os valores lidos dos campos.
  const novoPost = {
    title: campoTitulo.value.trim(),
    body: campoConteudo.value.trim(),
    userId: 1,
  };

  status.textContent = "Enviando POST...";
  status.className = "alert alert-info mt-3";
  saida.textContent = "Aguarde...";

  fetch("https://jsonplaceholder.typicode.com/posts", {
    // method muda o padrão GET para POST.
    method: "POST",
    // headers informam que o corpo está no formato JSON.
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    // JSON.stringify converte o objeto em texto JSON.
    body: JSON.stringify(novoPost),
  })
    .then(function (resposta) {
      if (!resposta.ok) {
        throw new Error("A API respondeu com erro.");
      }

      return resposta.json();
    })
    .then(function (dados) {
      saida.textContent = JSON.stringify(dados, null, 2);
      status.textContent = "POST enviado. Observe o objeto retornado.";
      status.className = "alert alert-success mt-3";
    })
    .catch(function (erro) {
      saida.textContent = erro.message;
      status.textContent = "Não foi possível enviar o POST.";
      status.className = "alert alert-danger mt-3";
    });
});

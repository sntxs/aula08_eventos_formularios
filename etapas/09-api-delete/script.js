const formulario = document.querySelector("#form-delete");
const campoId = document.querySelector("#delete-id");
const status = document.querySelector("#status");
const saida = document.querySelector("#saida");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const id = campoId.value;

  if (id === "") {
    status.textContent = "Informe o ID que será excluído.";
    status.className = "alert alert-danger mt-3";
    return;
  }

  status.textContent = "Enviando solicitação de exclusão...";
  status.className = "alert alert-info mt-3";
  saida.textContent = "Aguarde...";

  // O ID é inserido no endpoint para identificar o recurso.
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  })
    .then(function (resposta) {
      if (!resposta.ok) {
        throw new Error("A API respondeu com erro.");
      }

      // DELETE pode retornar uma resposta sem corpo JSON.
      return resposta;
    })
    .then(function () {
      saida.textContent = `A API confirmou a exclusão simulada do post ${id}.`;
      status.textContent = "DELETE realizado com sucesso.";
      status.className = "alert alert-success mt-3";
    })
    .catch(function (erro) {
      saida.textContent = erro.message;
      status.textContent = "Não foi possível excluir o post.";
      status.className = "alert alert-danger mt-3";
    });
});

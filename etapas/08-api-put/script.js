// Encontramos os elementos HTML pelos seus IDs.
const formulario = document.querySelector("#form-put");
const campoId = document.querySelector("#post-id");
const campoTitulo = document.querySelector("#put-title");
const campoConteudo = document.querySelector("#put-body");
const status = document.querySelector("#status");
const saida = document.querySelector("#saida");

formulario.addEventListener("submit", function (evento) {
  // Impede o navegador de recarregar a página ao enviar o formulário.
  evento.preventDefault();

  const id = campoId.value;
  const titulo = campoTitulo.value.trim();
  const conteudo = campoConteudo.value.trim();

  if (id === "" || titulo === "" || conteudo === "") {
    status.textContent = "Preencha o ID, o título e o conteúdo.";
    status.className = "alert alert-danger mt-3";
    return;
  }

  // Este é o objeto JavaScript que será convertido para JSON.
  const postAtualizado = {
    id: Number(id),
    title: titulo,
    body: conteudo,
    userId: 1,
  };

  status.textContent = "Enviando atualização...";
  status.className = "alert alert-info mt-3";
  saida.textContent = "Aguarde...";

  // O ID informa qual post existente deverá ser atualizado.
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    headers: {
      // O cabeçalho informa que o body contém JSON.
      "Content-Type": "application/json; charset=UTF-8",
    },
    // JSON.stringify transforma o objeto em texto JSON.
    body: JSON.stringify(postAtualizado),
  })
    .then(function (resposta) {
      if (!resposta.ok) {
        throw new Error("A API respondeu com erro.");
      }

      return resposta.json();
    })
    .then(function (dados) {
      saida.textContent = JSON.stringify(dados, null, 2);
      status.textContent = `Post ${id} atualizado com sucesso.`;
      status.className = "alert alert-success mt-3";
    })
    .catch(function (erro) {
      saida.textContent = erro.message;
      status.textContent = "Não foi possível atualizar o post.";
      status.className = "alert alert-danger mt-3";
    });
});

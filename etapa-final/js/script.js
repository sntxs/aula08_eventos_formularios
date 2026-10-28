// ============================================================
// AULA 08 - Eventos, formularios, validacao e APIs
// ============================================================

// querySelector encontra um elemento HTML usando um seletor CSS.
const formularioAluno = document.querySelector("#form-aluno");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoCurso = document.querySelector("#curso");
const mensagemFormulario = document.querySelector("#mensagem-formulario");
const botaoLimparFormulario = document.querySelector("#limpar-formulario");

const botaoGet = document.querySelector("#btn-get");
const botaoLimparGet = document.querySelector("#btn-limpar-get");
const saidaGet = document.querySelector("#get-output");
const statusGet = document.querySelector("#get-status");

const formularioPost = document.querySelector("#form-post");
const campoTituloPost = document.querySelector("#post-title");
const campoConteudoPost = document.querySelector("#post-body");
const saidaPost = document.querySelector("#post-output");
const statusPost = document.querySelector("#post-status");

// Mostra uma mensagem usando as classes visuais do Bootstrap.
function mostrarMensagem(elemento, texto, tipo) {
  elemento.textContent = texto;
  elemento.classList.remove("d-none", "alert-success", "alert-danger", "alert-info");
  elemento.classList.add(`alert-${tipo}`);
}

// Adiciona ou remove o estado visual de erro ou sucesso de um campo.
function marcarCampo(campo, valido) {
  campo.classList.remove("is-valid", "is-invalid");
  campo.classList.add(valido ? "is-valid" : "is-invalid");
}

function limparEstadosFormulario() {
  [campoNome, campoEmail, campoCurso].forEach((campo) => {
    campo.classList.remove("is-valid", "is-invalid");
  });
}

// submit acontece quando o usuario envia o formulario.
formularioAluno.addEventListener("submit", function (evento) {
  // Impede o comportamento padrao, que recarregaria a pagina.
  evento.preventDefault();

  // value le o que foi digitado. trim remove espacos extras.
  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const curso = campoCurso.value;

  // Cada expressao verifica se um campo possui conteudo.
  const nomeValido = nome !== "";
  const emailValido = email !== "" && campoEmail.validity.valid;
  const cursoValido = curso !== "";

  // classList altera as classes usadas pelo Bootstrap.
  marcarCampo(campoNome, nomeValido);
  marcarCampo(campoEmail, emailValido);
  marcarCampo(campoCurso, cursoValido);

  if (nomeValido && emailValido && cursoValido) {
    mostrarMensagem(
      mensagemFormulario,
      `Cadastro de ${nome} realizado com sucesso!`,
      "success"
    );
  } else {
    mostrarMensagem(
      mensagemFormulario,
      "Verifique os campos destacados e tente novamente.",
      "danger"
    );
  }
});

// input acontece enquanto o usuario digita.
[campoNome, campoEmail, campoCurso].forEach((campo) => {
  campo.addEventListener("input", function () {
    campo.classList.remove("is-invalid");
  });
});

// reset acontece quando o formulario e limpo.
botaoLimparFormulario.addEventListener("click", function () {
  limparEstadosFormulario();
  mensagemFormulario.className = "alert d-none";
  mensagemFormulario.textContent = "";
});

// ============================================================
// TESTE REAL DE GET COM JSONPlaceholder
// ============================================================

botaoGet.addEventListener("click", function () {
  mostrarMensagem(statusGet, "Buscando dados...", "info");
  saidaGet.textContent = "Aguarde...";

  // fetch faz uma requisicao para o endpoint informado.
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (resposta) {
      if (!resposta.ok) {
        throw new Error("Nao foi possivel consultar a API.");
      }

      // json transforma a resposta em um objeto JavaScript.
      return resposta.json();
    })
    .then(function (dados) {
      // JSON.stringify organiza o objeto para aparecer no pre.
      saidaGet.textContent = JSON.stringify(dados, null, 2);
      mostrarMensagem(statusGet, "GET realizado com sucesso.", "success");
    })
    .catch(function (erro) {
      saidaGet.textContent = erro.message;
      mostrarMensagem(statusGet, "Ocorreu um erro no GET.", "danger");
    });
});

botaoLimparGet.addEventListener("click", function () {
  saidaGet.textContent = "Clique em Buscar post para testar.";
  statusGet.className = "alert d-none mt-3";
  statusGet.textContent = "";
});

// ============================================================
// TESTE REAL DE POST COM JSONPlaceholder
// ============================================================

formularioPost.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const titulo = campoTituloPost.value.trim();
  const conteudo = campoConteudoPost.value.trim();
  const tituloValido = titulo !== "";
  const conteudoValido = conteudo !== "";

  marcarCampo(campoTituloPost, tituloValido);
  marcarCampo(campoConteudoPost, conteudoValido);

  if (!tituloValido || !conteudoValido) {
    mostrarMensagem(statusPost, "Preencha o titulo e o conteudo.", "danger");
    return;
  }

  const novoPost = {
    title: titulo,
    body: conteudo,
    userId: 1,
  };

  mostrarMensagem(statusPost, "Enviando POST...", "info");
  saidaPost.textContent = "Aguarde...";

  fetch("https://jsonplaceholder.typicode.com/posts", {
    // method informa a API que queremos enviar dados.
    method: "POST",
    // headers descrevem o formato do conteudo enviado.
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    // JSON.stringify converte o objeto JavaScript para texto JSON.
    body: JSON.stringify(novoPost),
  })
    .then(function (resposta) {
      if (!resposta.ok) {
        throw new Error("Nao foi possivel enviar o POST.");
      }

      return resposta.json();
    })
    .then(function (dados) {
      saidaPost.textContent = JSON.stringify(dados, null, 2);
      mostrarMensagem(
        statusPost,
        "POST realizado. O retorno e simulado para estudo.",
        "success"
      );
    })
    .catch(function (erro) {
      saidaPost.textContent = erro.message;
      mostrarMensagem(statusPost, "Ocorreu um erro no POST.", "danger");
    });
});

// ============================================================
// TESTE REAL DE PUT COM JSONPlaceholder
// ============================================================

const formularioPut = document.querySelector("#form-put");
const campoIdPut = document.querySelector("#put-id");
const campoTituloPut = document.querySelector("#put-title");
const campoConteudoPut = document.querySelector("#put-body");
const saidaPut = document.querySelector("#put-output");
const statusPut = document.querySelector("#put-status");

formularioPut.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const id = campoIdPut.value;
  const titulo = campoTituloPut.value.trim();
  const conteudo = campoConteudoPut.value.trim();

  if (id === "" || titulo === "" || conteudo === "") {
    mostrarMensagem(statusPut, "Preencha o ID, o título e o conteúdo.", "danger");
    return;
  }

  const postAtualizado = {
    id: Number(id),
    title: titulo,
    body: conteudo,
    userId: 1,
  };

  mostrarMensagem(statusPut, "Enviando PUT...", "info");
  saidaPut.textContent = "Aguarde...";

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    // method define a operação HTTP realizada pela requisição.
    method: "PUT",
    headers: {
      // A API precisa saber que o body está no formato JSON.
      "Content-type": "application/json; charset=UTF-8",
    },
    // JSON.stringify transforma o objeto JavaScript em texto JSON.
    body: JSON.stringify(postAtualizado),
  })
    .then(function (resposta) {
      if (!resposta.ok) {
        throw new Error("Não foi possível atualizar o post.");
      }

      return resposta.json();
    })
    .then(function (dados) {
      saidaPut.textContent = JSON.stringify(dados, null, 2);
      mostrarMensagem(statusPut, `Post ${id} atualizado com sucesso.`, "success");
    })
    .catch(function (erro) {
      saidaPut.textContent = erro.message;
      mostrarMensagem(statusPut, "Ocorreu um erro no PUT.", "danger");
    });
});

// ============================================================
// TESTE REAL DE DELETE COM JSONPlaceholder
// ============================================================

const formularioDelete = document.querySelector("#form-delete");
const campoIdDelete = document.querySelector("#delete-id");
const saidaDelete = document.querySelector("#delete-output");
const statusDelete = document.querySelector("#delete-status");

formularioDelete.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const id = campoIdDelete.value;

  if (id === "") {
    mostrarMensagem(statusDelete, "Informe o ID que será excluído.", "danger");
    return;
  }

  mostrarMensagem(statusDelete, "Enviando DELETE...", "info");
  saidaDelete.textContent = "Aguarde...";

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  })
    .then(function (resposta) {
      if (!resposta.ok) {
        throw new Error("Não foi possível excluir o post.");
      }

      // DELETE pode retornar uma resposta sem corpo JSON.
      return resposta;
    })
    .then(function () {
      saidaDelete.textContent = `Exclusão simulada do post ${id} confirmada pela API.`;
      mostrarMensagem(statusDelete, "DELETE realizado com sucesso.", "success");
    })
    .catch(function (erro) {
      saidaDelete.textContent = erro.message;
      mostrarMensagem(statusDelete, "Ocorreu um erro no DELETE.", "danger");
    });
});
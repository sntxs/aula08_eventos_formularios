const formulario = document.querySelector("#form-feedback");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

// Esta função centraliza a troca das classes de feedback da mensagem.
function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;

  // Remove classes antigas antes de aplicar o novo estado.
  mensagem.classList.remove("d-none", "alert-success", "alert-danger");
  mensagem.classList.add(`alert-${tipo}`);
}

// Esta função marca um campo como válido ou inválido.
function marcarCampo(campo, valido) {
  campo.classList.remove("is-valid", "is-invalid");
  campo.classList.add(valido ? "is-valid" : "is-invalid");
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nomeValido = campoNome.value.trim() !== "";
  const emailValido = campoEmail.value.trim() !== "";

  marcarCampo(campoNome, nomeValido);
  marcarCampo(campoEmail, emailValido);

  if (nomeValido && emailValido) {
    mostrarMensagem("Formulário enviado com sucesso!", "success");
  } else {
    mostrarMensagem("Corrija os campos destacados.", "danger");
  }
});

// Ao digitar novamente, removemos o erro daquele campo.
[campoNome, campoEmail].forEach(function (campo) {
  campo.addEventListener("input", function () {
    campo.classList.remove("is-invalid");
  });
});

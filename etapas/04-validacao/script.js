const formulario = document.querySelector("#form-validacao");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  // trim remove espaços extras e deixa a comparação mais confiável.
  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();

  // Cada variável guarda o resultado de uma verificação booleana.
  const nomeValido = nome !== "";
  const emailValido = email !== "";

  // if executa o primeiro bloco quando a condição é verdadeira.
  if (nomeValido && emailValido) {
    resultado.textContent = `Tudo certo, ${nome}!`;
    resultado.className = "alert alert-success mt-3 mb-0";
  } else {
    // else executa quando a condição anterior é falsa.
    resultado.textContent = "Preencha nome e e-mail antes de continuar.";
    resultado.className = "alert alert-danger mt-3 mb-0";
  }
});

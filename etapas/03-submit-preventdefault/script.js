const formulario = document.querySelector("#form-teste");
const campoNome = document.querySelector("#nome");
const resultado = document.querySelector("#resultado");

// O evento submit acontece quando o botão de envio é acionado.
formulario.addEventListener("submit", function (evento) {
  // Sem esta linha, o navegador seguiria o comportamento padrão e recarregaria a página.
  evento.preventDefault();

  // value lê o que foi digitado no campo.
  const nome = campoNome.value;

  // A interpolação permite juntar texto e o conteúdo da variável.
  resultado.textContent = `Formulário recebido para: ${nome}`;
  console.log("O submit foi controlado pelo JavaScript.");
});

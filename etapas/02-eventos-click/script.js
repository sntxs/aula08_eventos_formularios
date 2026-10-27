// querySelector procura um elemento usando um seletor CSS.
const botao = document.querySelector("#btn-clique");
const resultado = document.querySelector("#resultado");

// addEventListener fica observando um evento.
// O evento "click" acontece quando o usuário clica no botão.
botao.addEventListener("click", function () {
  // textContent troca o texto que aparece dentro do parágrafo.
  resultado.textContent = "O evento click aconteceu!";

  // console.log ajuda a acompanhar o que aconteceu no DevTools.
  console.log("O botão foi clicado.");
});

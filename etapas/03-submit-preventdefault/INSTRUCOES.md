# Etapa 03 — submit e preventDefault

## Objetivo

Controlar o envio do formulário com JavaScript sem deixar o navegador recarregar a página.

## Conceitos

- `submit` é o evento disparado pelo envio do formulário.
- O parâmetro `evento` representa o evento que aconteceu.
- `evento.preventDefault()` cancela o comportamento padrão.
- Depois disso, o código pode ler os valores e mostrar um resultado.

## Como testar

1. Digite seu nome.
2. Clique em enviar.
3. Observe que a página não recarrega.
4. Retire o `preventDefault()` temporariamente e compare o comportamento.

## Desafio

Mostre também o assunto escolhido na mensagem de resultado.

# Etapa 09 — Exclusão com DELETE

## Objetivo

Solicitar a exclusão de um recurso usando o ID no endpoint.

## Antes de executar

Observe no `index.html`:

- o formulário `#form-delete`;
- o campo `#delete-id`;
- o elemento `#status`, que recebe o feedback;
- o elemento `#saida`, que exibe o resultado.

## O que investigar no JavaScript

1. Como o ID é lido do formulário?
2. Por que o ID aparece no final da URL?
3. Qual é a função de `method: "DELETE"`?
4. Por que esta etapa não chama `resposta.json()`?
5. Como a interface informa que a operação terminou?

## Como testar

1. Informe um ID entre 1 e 100.
2. Envie o formulário.
3. Abra a aba **Network** e confirme o método `DELETE`.
4. Observe o status HTTP retornado.

## Desafio

Adicione uma confirmação com `window.confirm()` antes de chamar o `fetch()`. Se a pessoa cancelar, a requisição não deverá acontecer.

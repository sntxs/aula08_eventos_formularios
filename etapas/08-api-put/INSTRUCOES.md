# Etapa 08 — Atualização com PUT

## Objetivo

Atualizar um recurso existente informando o ID na URL e enviando os novos dados no corpo da requisição.

## Antes de executar

Observe no `index.html`:

- o formulário `#form-put`;
- os campos usados para ID, título e conteúdo;
- o elemento `#status`, que recebe o feedback;
- o elemento `#saida`, que mostra a resposta.

## O que investigar no JavaScript

1. Onde o formulário é encontrado com `querySelector()`?
2. Por que `preventDefault()` é usado?
3. Como o ID é colocado no endpoint?
4. Qual é a função de `method: "PUT"`?
5. Por que o objeto precisa passar por `JSON.stringify()`?
6. Onde a resposta da API aparece na página?

## Como testar

1. Informe um ID entre 1 e 100.
2. Altere o título ou o conteúdo.
3. Envie o formulário.
4. Abra a aba **Network** do DevTools e confira a requisição.
5. Abra o Console e leia qualquer mensagem apresentada.

## Desafio

Altere o texto de sucesso para mostrar o ID que foi atualizado. Depois, limpe os campos sem apagar a lógica principal.

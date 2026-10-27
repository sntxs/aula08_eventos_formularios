# Etapa 07 — API com POST

## Objetivo

Enviar dados para um endpoint usando `POST` e observar a resposta JSON.

## Conceitos

- `method: "POST"` informa que os dados serão enviados.
- `headers` descreve o formato do conteúdo.
- `body` contém o conteúdo enviado.
- `JSON.stringify()` transforma um objeto JavaScript em texto JSON.
- `response.json()` transforma a resposta em objeto JavaScript.

## Como testar

1. Preencha título e conteúdo.
2. Envie o formulário.
3. Observe no `pre` o objeto retornado.
4. Abra o DevTools, aba Network, e consulte a requisição.

## Atenção

A JSONPlaceholder é uma API de testes. Ela simula a criação e devolve um identificador, mas não salva o novo post de forma permanente.

## Desafio

Acrescente `userId` no formulário ou crie um campo de categoria e inclua esse valor no objeto enviado.

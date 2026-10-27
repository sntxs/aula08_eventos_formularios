# Etapa 06 — API com GET

## Objetivo

Consultar dados de uma API pública usando `fetch()`.

## Conceitos

- API é uma interface para comunicação entre sistemas.
- Endpoint é o endereço específico de um recurso.
- `fetch()` inicia a requisição.
- `response.ok` indica se a resposta HTTP foi bem-sucedida.
- `response.json()` transforma JSON em objeto JavaScript.
- `.then()` continua o fluxo quando uma Promise termina.
- `.catch()` trata falhas.

## Como testar

1. Clique em **Buscar post**.
2. Observe a resposta formatada na tela.
3. Abra a aba Network do DevTools e localize a requisição.
4. Abra a requisição e observe o status e a resposta.

## Desafio

Troque o endpoint para `https://jsonplaceholder.typicode.com/users/1` e descubra quais propriedades são retornadas.

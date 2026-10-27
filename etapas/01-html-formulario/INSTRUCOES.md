# Etapa 01 — HTML do formulário

## Objetivo

Construir a estrutura visual de um formulário antes de criar qualquer interação com JavaScript.

## O que observar

- `form` agrupa os campos que serão enviados.
- `label` identifica o campo para a pessoa usuária.
- O `for` do `label` deve ser igual ao `id` do campo.
- `input`, `select` e `textarea` representam tipos diferentes de entrada.
- `button type="submit"` representa o envio.
- As classes `form-control`, `form-select`, `btn` e `btn-success` vêm do Bootstrap.

## Como testar

1. Abra o `index.html`.
2. Preencha os campos.
3. Clique em enviar.
4. Observe que ainda não há validação personalizada: o JavaScript será introduzido na próxima etapa.

## Desafio

Adicione um campo `telefone` com `label`, `input`, `type="tel"` e `autocomplete="tel"`.

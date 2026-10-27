# Projeto Aula 08 — Eventos, formulários e APIs

Este projeto foi organizado em etapas para acompanhar a explicação em sala. A ideia é observar um conceito pequeno, executar o exemplo e só depois avançar.

## Como começar

1. Abra o arquivo `index.html` desta pasta.
2. Escolha a **Etapa 01**.
3. Leia o arquivo `INSTRUCOES.md` da etapa.
4. Abra o `index.html` no navegador.
5. Abra o DevTools com `F12` e observe a aba **Console**.
6. Leia os comentários do arquivo `script.js` antes de alterar o código.
7. Faça o desafio da etapa e só depois avance.

Não é necessário instalar Node, npm, Bootstrap ou outra dependência. O Bootstrap é carregado por CDN, portanto é necessária conexão com a internet para visualizar a interface completa.

## Ordem das etapas

| Etapa | Tema | Arquivos principais |
|---|---|---|
| 01 | HTML do formulário | `index.html` |
| 02 | Evento de clique | `index.html` e `script.js` |
| 03 | `submit` e `preventDefault` | `index.html` e `script.js` |
| 04 | Validação com `if` | `index.html` e `script.js` |
| 05 | `classList` e feedback visual | `index.html` e `script.js` |
| 06 | API com `GET` e `fetch` | `index.html` e `script.js` |
| 07 | API com `POST` e JSON | `index.html` e `script.js` |
| Final | Integração dos conteúdos | `etapa-final/index.html` e `js/script.js` |

## O que cada etapa ensina

### 01 — HTML do formulário

Primeiro construímos a interface sem JavaScript. A turma observa `form`, `label`, `input`, `select`, `textarea`, `button`, `id`, `name` e as classes do Bootstrap.

### 02 — Evento de clique

O JavaScript encontra um botão com `querySelector` e reage ao evento `click` usando `addEventListener`. A resposta aparece na tela com `textContent`.

### 03 — Envio do formulário

O evento `submit` é capturado. `preventDefault()` impede o recarregamento da página e permite que o JavaScript controle o resultado.

### 04 — Validação

O código lê os valores com `.value`, remove espaços com `.trim()` e usa `if/else` para decidir se os campos estão preenchidos.

### 05 — Feedback visual

`classList.add()` e `classList.remove()` alteram classes do Bootstrap, como `is-valid`, `is-invalid`, `alert-success` e `alert-danger`.

### 06 — API com GET

`fetch()` consulta um endpoint público. A resposta é transformada com `response.json()` e exibida como texto formatado.

### 07 — API com POST

O formulário cria um objeto JavaScript, transforma o objeto em JSON com `JSON.stringify()` e envia uma requisição `POST` com `method`, `headers` e `body`.

## API utilizada

O projeto usa a [JSONPlaceholder](https://jsonplaceholder.typicode.com/), uma API pública para testes. Ela não exige cadastro nem chave de API. O `GET` consulta dados. O `POST` devolve uma resposta simulada para estudo e não mantém o novo post permanentemente.

## Estrutura da pasta

```text
projeto-aula08-eventos-formularios-etapas/
├── index.html                         # menu das etapas
├── README.md                          # visão geral do projeto
├── etapa-final/                        # integração de tudo
│   ├── index.html
│   └── js/script.js
└── etapas/
    ├── 01-html-formulario/
    ├── 02-eventos-click/
    ├── 03-submit-preventdefault/
    ├── 04-validacao/
    ├── 05-classlist-feedback/
    ├── 06-api-get/
    └── 07-api-post/
```

Cada pasta de etapa possui um `index.html`, um `INSTRUCOES.md` e, quando há JavaScript, um `script.js`.

## Como estudar o código

- Comece pelo HTML: identifique o `id` de cada elemento.
- Depois leia o JavaScript: confira se o seletor usado é igual ao `id` do HTML.
- Execute o exemplo antes de editar.
- Altere uma coisa por vez.
- Use `console.log()` para descobrir o conteúdo de uma variável.
- Se aparecer `null`, confira o seletor e se o script foi carregado depois do HTML.
- Se aparecer erro na API, confira a internet e o endpoint.

## Atividade final sugerida

Depois de concluir as etapas, altere o projeto final:

1. Adicione um campo de telefone ao formulário.
2. Valide o telefone e mostre o estado visual do Bootstrap.
3. Troque o endpoint do GET para `/users/1`.
4. Mostre na tela apenas o nome e o e-mail retornados.
5. Acrescente um botão para limpar as respostas do GET e do POST.
6. Explique para um colega a diferença entre `GET` e `POST`.

O objetivo é compreender o código. Não entregue nem explique um trecho que você ainda não consegue modificar.
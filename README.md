# Básico de Fastify e Node

Este projeto é um simples exemplo de criação de uma API REST utilizando Fastify com Node.js. O objetivo é demonstrar o funcionamento básico de rotas HTTP (CRUD) e armazenamento em memória.

### Requisitos
* Node.js

* npm, yarn, pnpm ou qualquer outro gerenciador

### Instalação
1. Clone ou baixe este repositório.

2. No diretório do projeto, instale as dependências:

```bash
npm install
```

### Executando o projeto
Para iniciar o servidor, utilize:

```
npm run dev
```

O servidor estará disponível em http://localhost:3333.

### Rotas
* **POST /videos**

    Cria um novo vídeo.

    Exemplo de body:

```bash
{
  "title": "Título do vídeo",
  "description": "Descrição",
  "duration": 120
}
```

### GET /videos
Retorna a lista de vídeos. É possível utilizar __?search=termo__ para filtrar por título ou descrição.

* **PUT /videos/:id**

    Atualiza os dados de um vídeo específico.

    Exemplo de body:

```bash
{
  "title": "Novo título",
  "description": "Nova descrição",
  "duration": 150
}
```


### DELETE /videos/:id
Remove um vídeo pelo ID.

### Observações
O projeto faz uso de uma classe DataBaseMemory para gerenciar os vídeos em memória.

Não há persistência em banco de dados, então, ao reiniciar o servidor, os dados serão perdidos.
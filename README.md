POC - Gerenciador de Pedidos

Este projeto é uma prova de conceito de uma API de gerenciamento de pedidos. Ele utiliza TypeScript, javascript e node.js para implementar uma API com o Express, que possui uma entidade de pedido. A API suporta as operações CRUD de pedidos, incluindo a criação, recuperação, atualização e exclusão de pedidos. Além disso, inclui uma rota com agregador ou filtragem, que permite filtrar pedidos por status. O banco de dados utilizado é o Postgres.

Estrutura do projeto:

    src/
        controllers/
            order.controller.ts - Controlador para as operações CRUD de pedidos
        models/
            order.model.ts - Modelo de pedido
        routes/
            index.ts - Arquivo de rotas
        services/
            order.service.ts - Serviço para as operações CRUD de pedidos
        app.ts - Arquivo principal da aplicação
    dump/
        dump.sql - Arquivo de dump do banco de dados
    README.md - Arquivo de documentação

Rotas:

    GET /orders - Recupera todos os pedidos
    GET /orders/:id - Recupera um pedido específico pelo ID
    POST /orders - Cria um novo pedido
    PUT /orders/:id - Atualiza um pedido específico pelo ID
    DELETE /orders/:id - Exclui um pedido específico pelo ID
    GET /orders/filter/:status - Filtra os pedidos por status

Documentação:

Para iniciar o projeto, é necessário importar o dump do banco de dados e configurar as credenciais de conexão. Em seguida, execute o comando "npx nodemon --exec "ts-node" src/app.ts" para iniciar a aplicação. As rotas estão disponíveis para teste e uso.# Poc_2

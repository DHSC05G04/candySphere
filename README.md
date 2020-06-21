# candySphere
PI - DH WebFull Stack - Sistema de Gerenciamento de Confeitaria

* [Protótipo Wireframe](https://www.figma.com/proto/MVsNgBtMtqjBIPfFQsv8wF/prototype?scaling=min-zoom&node-id=75%3A77)

## Uso de DB

Para usar DB, utilizaremos o modulo DOTENV do node.

Criar um arquivo `.env` na raiz do seu projeto com o conteúdo abaixo.

```txt
PORT=3000
DB_DIALECT=sequelizeDBDialectOption
DB_NAME=databaseName
DB_HOST=databaseHost
DB_PORT=3306
DB_USER=userName
DB_PASSWORD=suaSenhaAqui
EMAIL_USER=emailDoSistema
EMAIL_SENHA=senhaDoEmail
API_BASE=APIBaseURL
```

O arquivo config/database.js terá o conteudo ajustado para carregar estas variaveis:

```js
require('dotenv').config();

const config = {
    database: process.env.DB_NAME || 'candySphere',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    timestamps: true
}

module.exports = config;
```

## Documentação da API

A documentação da API criada para este projeto pode ser encontrada no link: [Candy Sphere API Doc](https://app.swaggerhub.com/apis-docs/rastapf/candy-sphere/0.1.0)

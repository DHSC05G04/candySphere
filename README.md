# candySphere
PI - DH WebFull Stack - Sistema de Gerenciamento de Confeitaria

* [Protótipo Wireframe](https://www.figma.com/proto/MVsNgBtMtqjBIPfFQsv8wF/prototype?scaling=min-zoom&node-id=75%3A77)

## Uso de DB

Para usar DB, utilizaremos o modulo DOTENV do node.

Criar um arquivo `.env` na raiz do seu projeto com o conteúdo abaixo.

```txt
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=suaSenhaAqui
```

O arquivo config/database.js terá o conteudo ajustado para carregar estas variaveis:

```js
require('dotenv').config();

const config = {
    database: 'candySphere',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    timestamps: false
}

module.exports = config;
```

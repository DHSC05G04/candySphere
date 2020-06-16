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

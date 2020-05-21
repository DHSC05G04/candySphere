<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
const { dbPass } = require('../.dbPass')
=======
const path = require('path')
const { dbPass } = require(path.resolve('configs','dbPass'));
>>>>>>> Creating Migrations
=======
const { dbPass } = require('../.dbPass')
>>>>>>> 81ef1558a1f336bb02ff02b50acbf44ee564bd73

module.exports = {
    username: 'llsouza',
    password: dbPass,
    database: 'candysphere',
    host: '192.168.15.16',
    dialect: 'mysql',
    port: 3306,
  }
<<<<<<< HEAD
>>>>>>> Sequelize configs
=======
>>>>>>> 81ef1558a1f336bb02ff02b50acbf44ee564bd73

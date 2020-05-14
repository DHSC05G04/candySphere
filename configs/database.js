const path = require('path')
const { dbPass } = require(path.resolve('configs','dbPass'));

module.exports = {
    username: 'llsouza',
    password: dbPass,
    database: 'candysphere',
    host: '192.168.15.16',
    dialect: 'mysql',
    port: 3306,
  }

const { dbPass } = require('../.dbPass')

module.exports = {
    username: 'llsouza',
    password: dbPass,
    database: 'mymovies',
    host: '192.168.15.16',
    dialect: 'mysql',
    port: 3306,
  }

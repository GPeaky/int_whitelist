const Sequelize = require('sequelize')

const sequelize = new Sequelize(GetConvar('mysql_connection_string'), {
    dialect: 'mysql',
    logging: false
})
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.MYSQL_DATABSE,
    'root', process.env.MYSQL_ROOT_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);
module.exports = sequelize;
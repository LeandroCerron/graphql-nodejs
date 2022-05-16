require('dotenv').config();

module.exports = {
  username: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABSE,
  dialect: process.env.DIALECT
}

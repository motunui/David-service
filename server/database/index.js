const Sequelize = require('sequelize');
const db = new Sequelize('Trip', 'root', '', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './Trip.sqlite'
  },
);

module.exports = db;
module.exports = Sequelize


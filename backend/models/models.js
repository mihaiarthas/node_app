const Sequelize = require('sequelize');
const sequelize = require('../database.js');
let Book = require('./book.js');
let Author = require('./author.js');

Book.belongsTo(Author);

module.exports = sequelize;
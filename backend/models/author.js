const Sequelize = require('sequelize');
const sequelize = require('../database.js');

Author = sequelize.define('author', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate : {
            len : [1,20]
        }
    },
    age: {
        type: Sequelize.STRING
    },
    booksNumber: {
        type: Sequelize.STRING
    },
});

module.exports = Author;
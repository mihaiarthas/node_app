const Sequelize = require('sequelize');
const sequelize = require('../database.js');

Book = sequelize.define('book', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate : {
            len : [1,20]
        }
    },
    publishingHouse: {
        type: Sequelize.STRING
    },
    year: {
        type: Sequelize.STRING
    },
    review: {
        type: Sequelize.TEXT,
        allowNull: true
    },
});

module.exports = Book;
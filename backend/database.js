const Sequelize = require('sequelize');
const sequelize = new Sequelize('library', 'root', null, {
	dialect: 'mysql'
});

module.exports = sequelize;
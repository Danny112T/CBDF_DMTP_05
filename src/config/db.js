// establecer la conexion con un dialecto = mysql
const { Sequelize } = require('sequelize');
const db = process.env.MYSQLDATABASE || "tienda"; //render
const user = process.env.MYSQLUSER || "root"; // render
const password = process.env.MYSQLPASSWORD || ""; // render

const sequelize = new Sequelize(
    'tienda',
    'root',
    'Datovar11!',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

//para poder usar esta conexion en otros archivos
module.exports = sequelize;
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono : {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

//migración
Cliente.sync({alter:true}).then(()=>{
    console.log('Tabla Cliente creada o ya existente')
}).catch((error)=>{
    console.error('Error al crear la tabla Cliente')
})

// Para usarse en otro modulo
module.exports = Cliente;

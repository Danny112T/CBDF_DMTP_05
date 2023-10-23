const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Categoria = sequelize.define('Categoria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

//migración
Categoria.sync({alter:true}).then(()=>{
    console.log('Tabla Categoria creada o ya existente')
}).catch((error)=>{
    console.error('Error al crear la tabla Categoria')
})

// Para usarse en otro modulo
module.exports = Categoria;
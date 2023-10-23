const { DataTypes } =  require('sequelize');
const sequelize = require('../config/db');

const Proveedor = sequelize.define('Proveedor', {
    id : {
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
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

//migración
Proveedor.sync({alter:true}).then(()=>{
    console.log('Tabla Proveedor creada o ya existente')
}).catch((error)=>{
    console.error('Error al crear la tabla Proveedor')
})

// Para usarse en otro modulo
module.exports = Proveedor;
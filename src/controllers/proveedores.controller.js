const Proovedor = require('../models/proveedores.model');

// Todos los proveedores
exports.getTodosProveedores = async (req, res) => {
    try {
        const proveedores = await Proovedor.findAll();
        res.status(200).json({
            estado: 1,
            mensaje: "proveedores obtenidos",
            data: proveedores
        });
    } catch (error) {
        res.status(500).json({ estado: 0, mensaje: 'Ocurrio un error desconocido'});
    }
}

// Un proveedor por id
exports.getProveedorPorID = async (req, res) => {
    const { id } = req.params;
    try {
        if ( id == undefined ) {
            return res.status(400).json({
                estado: 0,
                mensaje: 'El id es un parametro obligatorio'
            });
        } else {
            const proveedor = await Proovedor.findByPk(id);
            if (proveedor == null) {
                res.status(400).json({
                    estado: 0,
                    mensaje: "proveedor no encontrado",
                    data: null
                });
            } else {  
                res.status(200).json({
                    estado: 1,
                    mensaje: "proveedor obtenido",
                    data: proveedor
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: 'Ocurrio un error desconocido'
        })
    }
}

// Crear un proveedor
exports.crearProveedor = async (req, res) => {
    const { nombre, direccion, telefono } = req.body
    try {
        if (nombre == undefined || direccion == undefined || telefono == undefined) {
            return res.status(400).json({
                estado: 0,
                mensaje: 'Faltan datos obligatorios'
            });
        } else {
        const proveedor = await Proovedor.create({
            nombre,
            direccion,
            telefono
        });
        res.status(201).json({
            estado: 1,
            mensaje: "proveedor creado",
            data: proveedor
        });
    }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: 'Ocurrio un error desconocido'
        })
    }
}

// Actualizar un proveedor
exports.actualizarProveedor = async (req, res) => {
    const { id } = req.params
    try {
        const proveedor = await Proovedor.findByPk(id);
        if (proveedor == null ) {
            res.status(400).json({
                estado: 0,
                mensaje: "proveedor no encontrado",
                data: null
            });
        } else {
            const { nombre, direccion, telefono } = req.body
            const proveedorActualizado = await proveedor.update({
                nombre,
                direccion,
                telefono
            });
            
            res.status(200).json({
                estado: 1,
                mensaje: "proveedor actualizado",
                data: proveedorActualizado
            });
        } 
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: 'Ocurrio un error desconocido'
        })
    }
}

// Eliminar un proveedor
exports.eliminarProveedor = async (req, res) => {
    const { id } = req.params
    try {
        const proveedor = await Proovedor.findByPk(id);
        if (proveedor == null) {
            res.status(400).json({
                estado: 0,
                mensaje: "proveedor no encontrado",
                data: null
            });
        } else {
            await proveedor.destroy();
            res.status(200).json({
                estado: 1,
                mensaje: "proveedor eliminado",
                data: null
            });
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: 'Ocurrio un error desconocido'
        })
    }
}
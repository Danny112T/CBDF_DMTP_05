const Cliente = require('../models/clientes.model');

// Todos los clientes
exports.getTodosClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.status(200).json({
            estado: 1,
            mensaje: "clientes obtenidos",
            data: clientes
        });
    } catch (error) {
        res.status(500).json({ estado: 0, mensaje: 'Ocurrio un error desconocido'});
    }
}

// Un cliente por id
exports.getClientePorID = async (req, res) => {
    const { id } = req.params;
    try {
        if ( id == undefined ) {
            return res.status(400).json({
                estado: 0,
                mensaje: 'El id es un parametro obligatorio'
            });
        } else {
            const cliente = await Cliente.findByPk(id);
            if (cliente == null) {
                res.status(400).json({
                    estado: 0,
                    mensaje: "cliente no encontrado",
                    data: null
                });
            } else {  
                res.status(200).json({
                    estado: 1,
                    mensaje: "cliente obtenido",
                    data: cliente
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

// Crear un cliente
exports.crearCliente = async (req, res) => {
    const { nombre, direccion, telefono } = req.body
    try {
        if (nombre == undefined || direccion == undefined || telefono == undefined) {
            return res.status(400).json({
                estado: 0,
                mensaje: 'Faltan datos obligatorios'
            });
        } else {
        const cliente = await Cliente.create({
            nombre,
            direccion,
            telefono
        });
        res.status(201).json({
            estado: 1,
            mensaje: "cliente creado",
            data: cliente
        });
    }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: 'Ocurrio un error desconocido'
        })
    }
}

// Actualizar un cliente
exports.actualizarCliente = async (req, res) => {
    const { id } = req.params
    try {
        const cliente = await Cliente.findByPk(id)
        if (cliente == null) {
            res.status(400).json({
                estado: 0,
                mensaje: "cliente no encontrado",
                data: null
            });
        } else {
            const { nombre, direccion, telefono } = req.body
            const clienteActualizado = await cliente.update({
                nombre,
                direccion,
                telefono
            })
            res.status(200).json({
                estado: 1,
                mensaje: "cliente actualizado",
                data: clienteActualizado
            });
        }
    } catch (error) {
        res.status(500).json({ estado: 0, mensaje: 'Ocurrio un error desconocido'});
    }
}

// Eliminar un cliente
exports.eliminarCliente = async (req, res) => {
    const { id } = req.params
    try {
        const cliente = await Cliente.findByPk(id)
        if (cliente == null) {
            res.status(400).json({
                estado: 0,
                mensaje: "cliente no encontrado",
                data: null
            });
        } else {
            await cliente.destroy()
            res.status(200).json({
                estado: 1,
                mensaje: "cliente eliminado",
                data: cliente
            });
        }
    } catch (error) {
        res.status(500).json({ estado: 0, mensaje: 'Ocurrio un error desconocido'});
    }
}
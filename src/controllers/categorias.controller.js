const Categoria = require('../models/categorias.model')

// Todas las categorias
exports.getTodasCategoria = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.status(200).json({
            estado: 1,
            mensaje: "categorias obtenidas",
            data: categorias
        });
    } catch (error) {
        res.status(500).json({ estado: 0, mensaje: 'Ocurrio un error desconocido'});
    }
}

// Una categoria por id
exports.getCategoriaPorID = async (req, res) => {
    const { id } = req.params;
    try {
        if ( id == undefined ) {
            return res.status(400).json({
                estado: 0,
                mensaje: 'El id es un parametro obligatorio'
            });
        } else {
            const categoria = await Categoria.findByPk(id);
            if (categoria == null) {
                res.status(400).json({
                    estado: 0,
                    mensaje: "categoria no encontrada",
                    data: null
                });
            } else {  
                res.status(200).json({
                    estado: 1,
                    mensaje: "categoria obtenida",
                    data: categoria
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

// Crear una categoria
exports.crearCategoria = async (req, res) => {
    const { descripcion } = req.body
    try {
        if (descripcion == undefined) {
            return res.status(400).json({
                estado: 0,
                mensaje: 'La descripcion es obligatoria'
            });
        } else {
        const categoria = await Categoria.create({
            descripcion : descripcion
        })
            return res.json({
                estado: 1,
                message: 'Categoria creada',
                data: categoria
            });
    }} catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error desconocido' });
    }
}

// Actualizar una categoria por id
exports.actualizarCategoria = async (req, res) => {
    const { id } = req.params
    try {
        const categoria = await Categoria.findByPk(id)
        if ( id == undefined ) {
            return res.status(404).json({
                estado: 0,
                mensaje:"Categoria no encontrada"
            })
        } else {
            if (descripcion == undefined) {
                res.status(400).json({
                    estado : 0,
                    mensaje : "Faltan Parametros"
                })
            } else {
                await categoria.update({ descripcion : descripcion })
                res.status(200).json({
                    estado : 1,
                    mensaje : "Categoria actualizada con exito",
                    data : categoria
                })
            }
        }
    } catch (error) {
        res.status(500).json({ estado: 0, mesaje: 'Ocurrio un error desconocido' });
    }
}

// Borrar una categoria por id
exports.borrarCategoria = async (req, res) => {
    const { id } = req.params;
    try {
        if ( id == undefined ) {
            return res.status(400).json({
                estado: 0,
                mensaje: 'El id es un parametro obligatorio'
            });
        } else {
            const categoria = await Categoria.findByPk(id);
            categoria.destroy({
                where: { id: id }
            });
            if (categoria == null) {
                res.status(400).json({
                    estado: 0,
                    mensaje: "categoria no encontrada",
                    data: null
                });
            } else {  
                res.status(200).json({
                    estado: 1,
                    mensaje: "categoria eliminada",
                    data: categoria
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
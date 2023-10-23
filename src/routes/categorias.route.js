const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categorias.controller');

// Todas las categorias
router.get('/', categoriaController.getTodasCategoria);
router.get('/:id', categoriaController.getCategoriaPorID);
router.post('/', categoriaController.crearCategoria);
router.put('/:id', categoriaController.actualizarCategoria);
router.delete('/:id', categoriaController.borrarCategoria);

module.exports = router;
const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedores.controller');

// Todos los proveedores
router.get('/', proveedorController.getTodosProveedores);
router.get('/:id', proveedorController.getProveedorPorID);
router.post('/', proveedorController.crearProveedor);
router.put('/:id', proveedorController.actualizarProveedor);
router.delete('/:id', proveedorController.eliminarProveedor);

module.exports = router;
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clientes.controller');

// Todos los clientes
router.get('/', clienteController.getTodosClientes);
router.get('/:id', clienteController.getClientePorID);
router.post('/', clienteController.crearCliente);
router.put('/:id', clienteController.actualizarCliente);
router.delete('/:id', clienteController.eliminarCliente);

module.exports = router;
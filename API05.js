const express = require('express');
const routesCategorias = require('./src/routes/categorias.route');
const routesClientes = require("./src/routes/clientes.route");
const routesProductos = require("./src/routes/productos.route");
const routesFacturas = require("./src/routes/facturas.route");
const routesProveedores = require("./src/routes/proveedores.route");
const routesVentas = require("./src/routes/ventas.route");
const app = express();
const puerto = process.env.PORT || 3000;


// configuracion del servidor
app.use(express.json());
app.use('/socios/v2/categorias', routesCategorias);
app.use('/socios/v2/clientes', routesClientes);
app.use("/socios/v2/proveedores", routesProveedores);
/*app.use('/socios/v2/productos', routesProductos);
app.use('/socios/v2/facturas', routesFacturas);
app.use('/socios/v2/ventas', routesVentas);*/

// Iniciar el servidor
app.listen(puerto, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${puerto}`);
});

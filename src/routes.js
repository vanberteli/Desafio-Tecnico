const { Router } = require('express');

const ClientController = require('./Controllers/ClientController');
const ProductController = require('./Controllers/ProductController');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: 'Server is on...' });
}); 

routes.post('/clients', ClientController.store);
routes.get('/clients', ClientController.index);
routes.get('/clients/:id', ClientController.show);
routes.put('/clients/:id', ClientController.update);
routes.delete('/clients/:id', ClientController.delete);


routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);
routes.put('/products/:id', ProductController.update);


module.exports = routes;

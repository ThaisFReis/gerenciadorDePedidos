import express from 'express';
import {getAll, getById, create, update, deleteById, filterByStatus} from '../controllers/order.controller';

const routes = express();

// Route for creating a new order
// Rota para criar um novo pedido
routes.post('/orders', create);

// Route for getting all orders
routes.get('/orders', getAll);

// Route for getting a specific order
routes.get('/orders/:id', getById);

// Route for updating a specific order
routes.put('/orders/:id', update);

// Route for deleting a specific order
routes.delete('/orders/:id', deleteById);

// Route for filtering orders by status
routes.get('/orders/status/:status', filterByStatus);

// Export the routes
export default routes;
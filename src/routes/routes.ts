import express from 'express';
import { CreateProductController } from '../controllers/CreateProductController';
import { CreateUserController } from '../controllers/CreateUserController';
import { IndexAllProductsController } from '../controllers/IndexAllProductController';
import { SessionUserController } from '../controllers/SessionUserController';
export const routes = express.Router();

const createUser = new CreateUserController();
const createProduct = new CreateProductController();
const indexAllProducts = new IndexAllProductsController();
const sessionUser = new SessionUserController();

routes.post('/user-create', createUser.handle);
routes.post('/user-session', sessionUser.handle);
routes.post('/product-create', createProduct.handle);
routes.get('/product-index-all', indexAllProducts.handle);

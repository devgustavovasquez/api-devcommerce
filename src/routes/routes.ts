import express from 'express';
import { CreateProductController } from '../controllers/CreateProductController';
import { CreateUserController } from '../controllers/CreateUserController';
import { ProductByCepController } from '../controllers/IndexProductByCepController';
import { SessionUserController } from '../controllers/SessionUserController';
export const routes = express.Router();

const createUser = new CreateUserController();
const createProduct = new CreateProductController();
const sessionUser = new SessionUserController();
const indexProductByCep = new ProductByCepController();

routes.post('/user-create', createUser.handle);
routes.post('/user-session', sessionUser.handle);
routes.post('/product-create', createProduct.handle);
routes.post('/product-bycep', indexProductByCep.handle);

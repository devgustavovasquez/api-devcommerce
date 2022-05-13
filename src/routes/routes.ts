import express from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { SessionUserController } from '../controllers/SessionUserController';
export const routes = express.Router();

const createUser = new CreateUserController();
const sessionUser = new SessionUserController();

routes.post('/user-create', createUser.handle);
routes.post('/session-user', sessionUser.handle);

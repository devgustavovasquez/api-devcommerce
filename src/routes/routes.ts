import express from 'express';
import { PrismaUserRepository } from '../database/prisma/prisma-userCreate-repository';
import { UserCreate } from '../use-cases/user-create-use-case';
export const routes = express.Router();

routes.post('/user-create', async (req, res) => {
  const { name, email, password } = req.body;

  const prismaUserRepository = new PrismaUserRepository();
  const userCreateUseCase = new UserCreate(prismaUserRepository);

  await userCreateUseCase.execute({
    name,
    email,
    password,
  });

  return res.status(201).send();
});

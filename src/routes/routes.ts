import express from 'express';
import { PrismaUserRepository } from '../database/prisma/prisma-userCreate-repository';
import { prisma } from '../prisma';
import { UserCreate } from '../use-cases/user-create-use-case';
export const routes = express.Router();

routes.post('/user-create', async (req, res) => {
  const { name, email, password } = req.body;

  const prismaUserRepository = new PrismaUserRepository();
  const userCreateUseCase = new UserCreate(prismaUserRepository);

  const emailAlreadyUsed = await prisma.user.findFirst({ where: { email } });
  if (emailAlreadyUsed)
    return res.status(404).send({ message: 'Email already used' });

  const userAlreadyExists = await prisma.user.findFirst({ where: { name } });
  if (userAlreadyExists)
    return res.status(404).send({ message: 'User already exists' });

  await userCreateUseCase.execute({
    name,
    email,
    password,
  });

  return res.status(201).send();
});

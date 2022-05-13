import { Request, Response } from 'express';
import { PrismaUserRepository } from '../database/prisma/prisma-userCreate-repository';
import { PrismaExistsUserRepository } from '../database/prisma/prisma-userExists-repository';
import { UserCreate } from '../use-cases/user-create-use-case';
import { UserExists } from '../use-cases/user-exists-use-case';

export class CreateUserController {
  handle = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const prismaExistsUserRepository = new PrismaExistsUserRepository();
    const userExistsUseCase = new UserExists(prismaExistsUserRepository);

    const user = await userExistsUseCase.execute({ name, email });

    if (user) {
      return res.status(404).send(user);
    }

    const prismaUserRepository = new PrismaUserRepository();
    const userCreateUseCase = new UserCreate(prismaUserRepository);

    await userCreateUseCase.execute({
      name,
      email,
      password,
    });

    return res.status(201).send();
  };
}

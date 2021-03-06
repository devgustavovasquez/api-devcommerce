import { Request, Response } from 'express';
import { PrismaUserRepository } from '../database/prisma/prisma-userCreate-repository';
import { PrismaExistsUserRepository } from '../database/prisma/prisma-userExists-repository';
import { UserCreate } from '../use-cases/user-create-use-case';
import { UserExists } from '../use-cases/user-exists-use-case';
import bcrypt from 'bcrypt';

export class CreateUserController {
  handle = async (req: Request, res: Response) => {
    const { name, email, password, adress_city, adress_state } = req.body;

    const prismaExistsUserRepository = new PrismaExistsUserRepository();
    const userExistsUseCase = new UserExists(prismaExistsUserRepository);

    const user = await userExistsUseCase.execute({ name, email });

    if (user) {
      return res.status(404).send(user);
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const prismaUserRepository = new PrismaUserRepository();
    const userCreateUseCase = new UserCreate(prismaUserRepository);

    await userCreateUseCase.execute({
      name,
      email,
      password: encryptedPassword,
      adress_city,
      adress_state,
    });

    return res.status(201).send();
  };
}

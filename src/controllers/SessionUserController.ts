import { Request, Response } from 'express';
import { PrismaSessionRepository } from '../database/prisma/prisma-userSession-repository';
import { UserSession } from '../use-cases/user-session-use-case';

export class SessionUserController {
  handle = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const prismaSessionRepository = new PrismaSessionRepository();
    const userSessionUseCase = new UserSession(prismaSessionRepository);

    await userSessionUseCase.execute({
      email,
      password,
    });

    return res.status(200).send();
  };
}

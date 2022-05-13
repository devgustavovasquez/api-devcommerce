import { Request, Response } from 'express';
import { PrismaSessionRepository } from '../database/prisma/prisma-userSession-repository';
import { UserSession } from '../use-cases/user-session-use-case';
import bcrypt from 'bcrypt';

export class SessionUserController {
  handle = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const prismaSessionRepository = new PrismaSessionRepository();
    const userSessionUseCase = new UserSession(prismaSessionRepository);

    const user = await userSessionUseCase.execute({
      email,
    });

    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(403).send();
      }
    }

    if (user == undefined) {
      return res.status(403).send();
    }

    return res.status(200).send({ id: user.id });
  };
}

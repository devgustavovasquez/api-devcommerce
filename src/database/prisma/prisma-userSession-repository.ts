import { prisma } from '../../prisma';
import {
  UserSessionData,
  UserSessionRepository,
} from '../userSession-repository';

export class PrismaSessionRepository implements UserSessionRepository {
  async index({ email }: UserSessionData) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        password: true,
      },
    });

    if (user != null) {
      return user;
    }
  }
}

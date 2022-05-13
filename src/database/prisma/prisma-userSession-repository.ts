import { prisma } from '../../prisma';
import {
  UserSessionData,
  UserSessionRepository,
} from '../userSession-repository';

export class PrismaSessionRepository implements UserSessionRepository {
  async index({ email, password }: UserSessionData) {
    await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
  }
}

import { prisma } from '../../prisma';
import { UserExistsData, UserExistsRepository } from '../userExists-repository';

export class PrismaExistsUserRepository implements UserExistsRepository {
  async verify({ name, email }: UserExistsData) {
    const emailAlreadyUsed = await prisma.user.findFirst({ where: { email } });

    const userAlreadyExists = await prisma.user.findFirst({ where: { name } });

    if (emailAlreadyUsed || userAlreadyExists) {
      return { email: !!emailAlreadyUsed, name: !!userAlreadyExists };
    }

    return null;
  }
}

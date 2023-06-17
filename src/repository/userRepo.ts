import prisma from '../../prisma/prisma';
import { User } from '@prisma/client';

export const createUser = async (user: User) => {
  await prisma.user.create({
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  });
};

export const getUserById = async (userId: number): Promise<User | undefined> => {
  return prisma.user.findUniqueOrThrow({
    where: {
      id: userId,
    },
  });
};

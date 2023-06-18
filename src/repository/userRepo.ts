import prisma from '../../prisma/prisma';
import { Prisma } from '@prisma/client';

export const createUser = async (user: Prisma.UserCreateInput) => {
  return prisma.user.create({
    data: user,
  });
};

export const getUserById = async (userId: number) => {
  try {
    return prisma.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
    });
  } catch (e) {
    return e;
  }
};

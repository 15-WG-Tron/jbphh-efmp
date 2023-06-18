import { PrismaClient, Prisma, User } from '@prisma/client';
import { getDate } from '../src/utils/getDate';

const casual = require('casual');
const prisma = new PrismaClient();

const createUser = (firstName?: string, lastName?: string, email?: string) => {
  return {
    firstName: firstName ? firstName : (casual.first_name as string),
    lastName: lastName ? lastName : (casual.last_name as string),
    email: email ? email : (casual.email as string),
    username: (casual.first_name + casual.last_name) as string,
    createdAt: getDate(),
    updatedAt: getDate(),
  };
};

const addUserToDb = async (user: Prisma.UserCreateInput) => {
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

const seedDevDb = async () => {
  const user1 = createUser();
  await addUserToDb(user1);

  const user2 = createUser();
  await addUserToDb(user2);

  const bobJones = createUser('Bob', 'Jones', 'bobjones@gmail.com');
  await addUserToDb(bobJones);
};

const main = async () => {
  await seedDevDb();
};

main()
  .catch(() => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { Prisma, PrismaClient } from '@prisma/client';
import { createDirectus, rest } from '@directus/sdk';

const client = createDirectus('http://localhost:8055').with(rest());

const prisma = new PrismaClient();

const password = "$argon2id$v=19$m=65536,t=3,p=4$zg6OSwYp91muPnplrJAEvg$IE/bCBc5+I0OKyfrXjD8AyFC619Pbvwtp6PFy8hTHqU"
const bobJones: User = {
  id: '2d2f2e42-8a1d-4a63-bfd9-7e8db20d5c6c',
  first_name: 'Bob',
  last_name: 'Jones',
  email: 'bobjones@gmail.com',
  password: password,

};

const andrewMonitor: User = {
  id: '91e674d9-951b-4c57-bc84-3d6c53ebf589',
  first_name: 'Andrew',
  last_name: 'Monitor',
  email: 'amonitor@gmail.com',
  password: password,
 
};

const adminUser: User = {
  id: 'f212e1a3-7f4e-492c-80e2-aae45d2aa437',
  first_name: 'Admin',
  last_name: 'User',
  email: password,
  password: 'd1r3ctu5',
};

type User = Prisma.directus_usersCreateInput;

const seedUsers = async () => {
const createUser = async (userInfo: User) => {
  await prisma.directus_users.create({
    data: userInfo,
  });
};

await createUser(bobJones);
await createUser(andrewMonitor);
await createUser(adminUser);
}

const seedDev = async () => {
  await seedUsers()
};
async function main() {
  await seedDev()
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    if (e instanceof Error) {
      console.error(e.message);
      await prisma.$disconnect();
      process.exit(1);
    }
  });

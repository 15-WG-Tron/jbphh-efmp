import { Prisma, PrismaClient } from '@prisma/client';
import {
  adminRole,
  andrewMonitor,
  bobJones,
  coreyAdmin,
  editorRole,
  efmpMedical,
  legalServices,
  permissions,
  sarahParker,
  schoolLiaison,
} from './__mock__/fixtures';

export type User = Prisma.directus_usersCreateInput;
export type Role = Prisma.directus_rolesCreateInput;
export type Organization = Prisma.organizationCreateInput;
export type Permissions = Prisma.directus_permissionsCreateManyInput;

const prisma = new PrismaClient();

const createUser = async (user: User) => {
  await prisma.directus_users.create({ data: user });
};

const createDirectusRole = async (role: Role) => {
  await prisma.directus_roles.create({
    data: role,
  });
};
const createOrganization = async (org: Organization) => {
  await prisma.organization.create({ data: org });
};
const createPermissions = async (permissions: Permissions[]) => {
  await prisma.directus_permissions.createMany({ data: permissions });
};
const seedOrganization = async () => {
  await createOrganization(efmpMedical);
  await createOrganization(legalServices);
  await createOrganization(schoolLiaison);
};
const seedRoles = async () => {
  await createDirectusRole(adminRole);
  await createDirectusRole(editorRole);
};

const seedDirectusUsers = async () => {
  await createUser(bobJones);
  await createUser(andrewMonitor);
  await createUser(sarahParker);
};

const seedDirectusPermissions = async () => {
  await createPermissions(permissions);
};

const seedDev = async () => {
  await seedRoles();
  await createUser(coreyAdmin)
  await seedOrganization();
  await seedDirectusUsers();
  await seedDirectusPermissions();
};
async function main() {
  await seedDev();
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

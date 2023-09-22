import { getDate } from '../../src/utils/getDate';

const password = '$argon2id$v=19$m=65536,t=3,p=4$zg6OSwYp91muPnplrJAEvg$IE/bCBc5+I0OKyfrXjD8AyFC619Pbvwtp6PFy8hTHqU';

export const adminRole = {
  id: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
  name: 'Administrator',
  icon: 'verified',
  description: '$t:admin_description',
  enforce_tfa: false,
  admin_access: true,
  app_access: true,
};

export const editorRole = {
  id: '4e5ce5eb-2cd3-45de-8073-b754dc2a79aa',
  name: 'Editor',
  icon: 'verified',
  description: 'This role provides the user with the ability to read from and write to specific APIs.',
  enforce_tfa: false,
  admin_access: false,
  app_access: true,
};

export const coreyAdmin = {
  id: 'f212e1a3-7f4e-492c-80e2-aae45d2aa437',
  first_name: 'Corey',
  last_name: 'Admin',
  email: 'cadmin@gmail.com',
  password: password,
  role: adminRole.id,
  status: 'active',
};

export const efmpMedical = {
  id: 1,
  name: 'EFMP Medical',
  shortName: 'Medical',
  status: 'published',
  user_created: coreyAdmin.id,
  user_updated: null,
  date_created: getDate(),
  date_updated: null,
};

export const legalServices = {
  id: 2,
  name: 'Legal Services',
  shortName: 'Legal',
  status: 'published',
  user_created: coreyAdmin.id,
  user_updated: null,
  date_created: getDate(),
  date_updated: null,
};

export const schoolLiaison = {
  id: 3,
  name: 'School Liaison',
  shortName: 'CYP',
  status: 'published',
  user_created: coreyAdmin.id,
  user_updated: null,
  date_created: getDate(),
  date_updated: null,
};

export const bobJones = {
  id: '2d2f2e42-8a1d-4a63-bfd9-7e8db20d5c6c',
  first_name: 'Bob',
  last_name: 'Jones',
  email: 'bjones@gmail.com',
  password: password,
  role: editorRole.id,
  status: 'active',
  organization: efmpMedical.id,
};

export const andrewMonitor = {
  id: '91e674d9-951b-4c57-bc84-3d6c53ebf589',
  first_name: 'Andrew',
  last_name: 'Monitor',
  email: 'amonitor@gmail.com',
  password: password,
  role: editorRole.id,
  status: 'active',
  organization: legalServices.id,
};

export const sarahParker = {
  id: '544753f1-9748-4c3e-abfd-e4549d4628d1',
  first_name: 'Sarah',
  last_name: 'Parker',
  email: 'sparker@gmail.com',
  password: password,
  role: editorRole.id,
  status: 'active',
  organization: schoolLiaison.id,
};

export const permissions = [
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_files',
    action: 'create',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_files',
    action: 'read',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_files',
    action: 'update',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_files',
    action: 'delete',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_dashboards',
    action: 'create',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_dashboards',
    action: 'read',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_dashboards',
    action: 'update',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_dashboards',
    action: 'delete',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_panels',
    action: 'create',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_panels',
    action: 'read',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_panels',
    action: 'update',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_panels',
    action: 'delete',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_folders',
    action: 'create',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_folders',
    action: 'read',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_folders',
    action: 'update',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_folders',
    action: 'delete',
    permissions: {},
    fields: null,
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_users',
    action: 'read',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_users',
    action: 'update',
    permissions: { id: { _eq: '$CURRENT_USER' } },
    fields: 'first_name,last_name,email,password,location,title,description,avatar,language,theme,tfa_secret',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_roles',
    action: 'read',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_shares',
    action: 'read',
    permissions: { _or: [{ role: { _eq: '$CURRENT_ROLE' } }, { role: { _null: true } }] },
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_shares',
    action: 'create',
    permissions: {},
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_shares',
    action: 'update',
    permissions: { user_created: { _eq: '$CURRENT_USER' } },
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_shares',
    action: 'delete',
    permissions: { user_created: { _eq: '$CURRENT_USER' } },
    fields: '*',
  },
  {
    role: 'aa8a1e60-0d04-4d78-b538-6a63069c04ce',
    collection: 'directus_flows',
    action: 'read',
    permissions: { trigger: { _eq: 'manual' } },
    fields: 'id,status,name,icon,color,options,trigger',
  },
  {
    role: editorRole.id,
    collection: 'checklist',
    action: 'create',
    permissions: {},
    fields: '*',
  },
  {
    role: editorRole.id,
    collection: 'landingPage',
    action: 'create',
    permissions: {},
    fields: '*',
  },
  {
    role: editorRole.id,
    collection: 'organization',
    action: 'read',
    permissions: {"_and":[{"id":{"_eq":"$CURRENT_USER.organization.id"}}]},
    fields: 'id,status,name,shortName,user_created,date_created,user_updated,date_updated,checklist,users',
  },
  {
    role: editorRole.id,
    collection: 'landingPage',
    action: 'read',
    permissions: {"_and":[{"organization":{"id":{"_eq":"$CURRENT_USER.organization.id"}}}]},
    fields: '*',
  },
  {
    role: editorRole.id,
    collection: 'checklist',
    action: 'read',
    permissions:{"_and":[{"organization":{"id":{"_eq":"$CURRENT_USER.organization.id"}}}]},
    fields: '*',
  },
  {
    role: editorRole.id,
    collection: 'checklist',
    action: 'update',
    permissions: {},
    fields: '*',
  },
  {
    role: editorRole.id,
    collection: 'landingPage',
    action: 'update',
    permissions: {},
    fields: '*',
  },
];

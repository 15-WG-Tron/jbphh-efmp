import { User } from '@prisma/client';
import { getDate } from '../../../src/utils/getDate';

export const johnDoe = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  email: 'johndoe@example.com',
  createdAt: getDate(7),
  updatedAt: getDate(7),
} satisfies User;
export const janeSmith = {
  id: 2,
  firstName: 'Jane',
  lastName: 'Smith',
  username: 'janesmith',
  email: 'janesmith@example.com',
  createdAt: getDate(90),
  updatedAt: getDate(72),
} satisfies User;

export const michaelJohnson = {
  id: 3,
  firstName: 'Michael',
  lastName: 'Johnson',
  username: 'michaeljohnson',
  email: 'michaeljohnson@example.com',
  createdAt: getDate(500),
  updatedAt: getDate(30),
} satisfies User;

export const emilyBrown = {
  id: 4,
  firstName: 'Emily',
  lastName: 'Brown',
  username: 'emilybrown',
  email: 'emilybrown@example.com',
  createdAt: getDate(2),
  updatedAt: getDate(2),
} satisfies User;

export const davidWilson = {
  id: 5,
  firstName: 'David',
  lastName: 'Wilson',
  username: 'davidwilson',
  email: 'davidwilson@example.com',
  createdAt: getDate(9),
  updatedAt: getDate(1),
} satisfies User;
export const sarahTaylor = {
  id: 6,
  firstName: 'Sarah',
  lastName: 'Taylor',
  username: 'sarahtaylor',
  email: 'sarahtaylor@example.com',
  createdAt: getDate(28),
  updatedAt: getDate(1),
} satisfies User;

export const danielAnderson = {
  id: 7,
  firstName: 'Daniel',
  lastName: 'Anderson',
  username: 'danielanderson',
  email: 'danielanderson@example.com',
  createdAt: getDate(),
  updatedAt: getDate(),
} satisfies User;
export const oliviaLee = {
  id: 8,
  firstName: 'Olivia',
  lastName: 'Lee',
  username: 'olivialee',
  email: 'olivialee@example.com',
  createdAt: getDate(),
  updatedAt: getDate(),
} satisfies User;
export const jamesMiller = {
  id: 9,
  firstName: 'James',
  lastName: 'Miller',
  username: 'jamesmiller',
  email: 'jamesmiller@example.com',
  createdAt: getDate(14),
  updatedAt: getDate(2),
} satisfies User;

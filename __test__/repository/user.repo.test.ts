import { afterEach, describe, expect, it, vi } from 'vitest';
import { createUser, getUserById } from '../../src/repository/userRepo';
import prisma from '../../prisma/__mocks__/prisma';
import { johnDoe, jamesMiller } from '../testutils/__mocks__/fixtures';

vi.mock('../../prisma/prisma');

describe('Testing the the user repository functions', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should create new user', async () => {
    const { id, ...newUser } = johnDoe;
    prisma.user.create.mockResolvedValue({ ...newUser, id: 1 });
    const user = await createUser(newUser);
    expect(user).toStrictEqual({ ...newUser, id: 1 });
  });

  it('should throw and error when user id is not found', async () => {
    const errorMsg = 'NotFoundError: No User found error';
    prisma.user.findUniqueOrThrow.mockImplementation(() => {
      throw new Error(errorMsg);
    });

    await expect(getUserById(234)).resolves.toEqual(new Error(errorMsg));
  });

  it('should return user found by id', async () => {
    const { id, ...user } = jamesMiller;
    prisma.user.findUniqueOrThrow.mockResolvedValue({ ...jamesMiller });
    const userFoundById = await getUserById(id);
    expect(userFoundById).toStrictEqual(jamesMiller);
  });
});

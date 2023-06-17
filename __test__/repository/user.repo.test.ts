import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { createUser, getUserById } from '@/repository/userRepo';
import '../testutils/mocks/fixtures';

vi.mock('../../src/repository/userRepo');

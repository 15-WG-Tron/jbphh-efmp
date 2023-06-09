import { setupServer } from 'msw/node';
import { handlers } from "./mswHandler";
import { rest } from 'msw';

const server = setupServer(...handlers);

export { server, rest };

import { rest } from 'msw';

export const handlers = [
  rest.get('http', (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

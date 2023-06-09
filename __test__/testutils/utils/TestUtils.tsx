import { StyledEngineProvider } from '@mui/material';
import { RenderOptions, cleanup, render } from '@testing-library/react';

import { afterEach } from 'vitest';
import React from 'react';

afterEach(() => {
  cleanup();
});

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
};
const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: AllTheProviders,
    ...options,
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };

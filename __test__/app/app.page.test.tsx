import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import Home from '@/app/page';

afterEach(() => {
  cleanup();
});

describe('Testing Home Page', () => {
  it('Should render Hello World', () => {
    const { getByText } = render(<Home />);
    const h1 = getByText(/Welcome to Cyber 'Ohana/i);
    expect(h1).toBeInTheDocument();
  });
});

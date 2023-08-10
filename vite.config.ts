import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],

  test: {
    coverage: {
      provider: 'v8',

      exclude: ['__test__/**/*'],
    },

    reporters: ['default', 'html'],

    globals: true,

    environment: 'jsdom',

    setupFiles: './__test__/testutils/mocks/setupTests.ts',

    // you might want to disable it, if you don't have tests that rely on CSS

    // since parsing CSS is slow

    css: false,
  },
  resolve: {
    alias: {
      '@/components': '/src/components',
      '@/const': '/src/const',
      '@/repository': '/src/repository',
      '@/types': '/src/types',
      '@/utils': '/src/utils',
      '@/app': '/src/app',
      '@/middleware': '/src/middleware',
    },
  },
});

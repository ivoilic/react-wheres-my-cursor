import { defineConfig } from 'vite';
import path from 'path';

module.exports = defineConfig({
  plugins: [],
  build: {
    minify: true,
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@wheres-my-cursor/react',
      fileName: (format) => `react-wmc.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {},
      },
    },
  },
});

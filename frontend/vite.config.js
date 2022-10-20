/* eslint-disable import/namespace */
import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
    },
  },

  plugins: [preact()],
});

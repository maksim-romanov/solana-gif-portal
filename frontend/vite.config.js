/* eslint-disable import/no-named-as-default */
/* eslint-disable import/namespace */
import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill';
import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      utils: path.resolve(__dirname, './src/utils'),
      hooks: path.resolve(__dirname, './src/hooks'),
      constants: path.resolve(__dirname, './src/constants'),
      public: path.resolve(__dirname, './public'),
    },
  },

  plugins: [preact()],

  optimizeDeps: {
    esbuildOptions: {
      define: { global: 'globalThis' },
      plugins: [NodeGlobalsPolyfillPlugin({ buffer: true })],
    },
  },
});

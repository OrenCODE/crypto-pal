import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const babelConfig = () => {
   if (process.env.NODE_ENV !== 'development') return;
   return {
      babel: {
         plugins: [
            [
               'babel-plugin-styled-components',
               {
                  displayName: true,
                  fileName: false,
               },
            ],
         ],
      },
   };
};

export default defineConfig({
   plugins: [react(babelConfig()), tsconfigPaths()],
   server: {
      port: 3000,
      proxy: {
         '/api': {
            target: 'http://localhost:5000',
            changeOrigin: true,
         },
      },
   },
});

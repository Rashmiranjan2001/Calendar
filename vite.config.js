// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-icons/all'],
      // Provide a custom resolver for "react-icons/all"
      // This tells Rollup how to handle the import
      onResolve: {
        // Handle the import for "react-icons/all" by remapping it to the specific icons you need
        // For example, if you need all icons from Font Awesome, you can import them individually
        async resolveId(source, importer) {
          if (source === 'react-icons/all') {
            // Return the specific icons you need from Font Awesome or any other icon library
            return { id: 'react-icons/fa', external: true };
          }
          return null; // Let Rollup handle other imports normally
        },
      },
    },
  },
});

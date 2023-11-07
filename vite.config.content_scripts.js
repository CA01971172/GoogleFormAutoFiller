import { resolve } from 'node:path';
import { defineConfig } from 'vite';
 
export default defineConfig((opt) => {
    return {
        root: 'src',
        build: {
            outDir: '../dist',
            rollupOptions: {
                input: {
                    app: resolve(__dirname, 'src/app/main.ts'),
                },
                output: {
                    entryFileNames: '[name].js',
                    inlineDynamicImports: true,
                    format: 'iife',
                },
            },
        },
    };
});
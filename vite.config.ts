import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src', // if you're using src as your working directory
    build: {
        outDir: '../dist'
    }
});
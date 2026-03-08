import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to your GitHub repo name for GitHub Pages deployment.
// If you use a custom domain or a username.github.io repo, change this to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/casszplaysmusic/',
})

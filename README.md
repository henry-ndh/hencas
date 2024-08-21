# Introduction
This is a sample project using React + TypeScript + Vite + ShadcnUI + TailwindCSS.

Just clone the repository and get started right away!

# Run project

`npm install`

`npm run dev`

`open http://localhost:3000`


# Project Structure

- `src/based`: Contains project components and configurations such as config files, constants, and custom hooks.
- `src/entities`: Contains pages and screens for the project.
- `src/queries`: Contains queries for the project, using react-query.
- `src/helpers`: Contains helpers and utilities used throughout the project.
- `src/component`: Contains shared components.
- `src/component/ui`: Contains ShadcnUI components.

# Configuration

- You can find config for project in vite.config.ts.

```js
// vite.config.js

export default defineConfig({
  plugins: [react()],
  resolve: {
    // config path 
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@query": path.resolve(__dirname, "./src/queries"),

    },
  },
  // config server
  server: {
    port: 3000
  }
  // any... 
})

```

# Maybe you need 

Something i think you will need :D

1. Clone with custom name 

`git clone <URL_OF_REPOSITORY> <NAME_OF_PROJECT_YOU_WANT>`

2. Change remote url

`git remote set-url origin <URL_OF_NEW_REPOSITORY>`


"# base_typescript" 


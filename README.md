# Introduction

Project using Fabric Js to create ideal template like canva


![cdnjs](https://img.shields.io/cdnjs/v/fabric.js.svg)
![jsdelivr](https://data.jsdelivr.com/v1/package/npm/fabric/badge)
![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)

[![NPM](https://badge.fury.io/js/fabric.svg)](http://badge.fury.io/js/fabric)
[![Downloads per month](https://img.shields.io/npm/dm/fabric.svg)](https://www.npmjs.org/package/fabric)
[![Bower](https://badge.fury.io/bo/fabric.svg)](http://badge.fury.io/bo/fabric)

---

[![Sponsor asturur](https://img.shields.io/static/v1?label=Sponsor%20asturur&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/asturur)
[![Sponsor melchiar](https://img.shields.io/static/v1?label=Sponsor%20melchiar&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/melchiar)
[![Sponsor ShaMan123](https://img.shields.io/static/v1?label=Sponsor%20ShaMan123&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/ShaMan123)
[![Patreon](https://img.shields.io/static/v1?label=Patreon&message=%F0%9F%91%8D&logo=Patreon&color=blueviolet)](https://www.patreon.com/fabricJS)

---

# Run project

`npm install`

`npm run dev`

`open http://localhost:3000`

# Supported Browsers/Environments

|   Context   | Supported Version | Notes                           |
| :---------: | :---------------: | ------------------------------- |
|   Firefox   |        ✔️         | 58                              |
|   Safari    |        ✔️         | 11                              |
|    Opera    |        ✔️         | chromium based                  |
|   Chrome    |        ✔️         | 64                              |
|    Edge     |        ✔️         | chromium based                  |
| Edge Legacy |        ❌         |
|    IE11     |        ❌         |
|   Node.js   |        ✔️         | [Node.js installation](#nodejs) |

Fabric.js Does not use transpilation by default, the browser version we support is determined by the level of canvas api we want to use and some js syntax. While JS can be easily transpiled, canvas API can't.

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


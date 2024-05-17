
# 2WEBD

This repository contains the code for the 2WEBD project.

## Description

The 2WEBD project is a web development project that aims to create a responsive and interactive website using modern web technologies.

## Features

- Responsive design
- Interactive user interface
- Dynamic content
- Integration with backend services

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Node.js
- Express

## Prerequisites

Make sure you have the following software installed on your machine before starting:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

To get started with the project, follow these steps:

1. download the project files in desktop
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`

## License

This project is licensed under the [MIT License](LICENSE).

## Authors

- Sadjy Sigiscar
- Julien SChoeffre


## Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



2WEDB
├── node_modules
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   ├── images
│   ├── pages
│   ├── queries
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── vite-env.d.ts
├── test
│   ├── exemple.spec.ts
├── test-exemple
│   ├── demo-todo-app.spec.ts
├── .gitignore
├── .eslintrc.json
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
├── README.md
├── tsconfig.node.json
└── tsconfig.json

##Libraries

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query)
- [playwright@latest](https://www.npmjs.com/package/playwright)

## Test


- Pour lancer les test, il faut faire :
		- ' npx playwright test' ou 'npm playwright test' pour juste faire les test en backoffice

- Pour lancer les test avec l'interface graphique, il faut faire:
		- ' npx playwright test --ui' ou 'npm playwright test --ui' pour lancer les test avec l'UI

- accueill.spec.ts : test de la page d'accueil
- avance-search.spec.ts : test de la recherche avancée
- oeuvre-detail.spec.ts : test de la page de détail d'une oeuvre
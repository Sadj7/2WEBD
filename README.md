
# 2WEBD

This repository contains the code for the 2WEBD (School) project.

## Description

The 2WEBD project is a web development project that aims to create a responsive and interactive website using the Metropolitan Museum of Art Collection api.
The documentation used can be found there: https://metmuseum.github.io .


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


## Prerequisites

Make sure you have the following software installed on your machine before starting:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/)


## Getting Started

To get started with the project, follow these steps:

1. download the project files in desktop
2. Install the dependencies: `npm install`, `npm add @tanstack/react-query @tanstack/react-query-devtools`, `npm install --save @tanstack/react-query @tanstack/react-query-devtools`, `npm install react-router-dom`
3. Start the development server: `npm run dev`


## Authors

- Sadjy SIGISCAR
- Julien SCHOEFFRE


##Libraries

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query)
- [playwright@latest](https://www.npmjs.com/package/playwright)


## Tests

- To start the tests with the back office :
		- ' npx playwright test' or 'npm playwright test'

- To start the tests with a GUI :
		- ' npx playwright test --ui' or 'npm playwright test --ui'

- accueill.spec.ts : Test of the home page's api calls
- avance-search.spec.ts : Test of the deep search page's api calls
- oeuvre-detail.spec.ts : test of the art details page's api calls

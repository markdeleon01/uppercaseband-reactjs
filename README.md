# uppercaseband-reactjs

**CI build:**
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/markdeleon01/uppercaseband-reactjs/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/markdeleon01/uppercaseband-reactjs/tree/master)

**Code unit test coverage:**
| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-57.28%25-red.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-60%25-red.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-52.38%25-red.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-56%25-red.svg?style=flat) |

As a matter of interest and passion for JavaScript and music in general, I created a ReactJS web application for my band UPPERCASE.

The live site can be found on: https://uppercaseband-reactjs.onrender.com

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project setup

1.  Install NodeJS on your local machine
2.  Clone this project repository
3.  Navigate to the project folder and install

```sh
npm install
```

4.  Install JSON Server to simulate a backend REST service to deliver data in JSON format to the front-end application

```
npm install -g json-server
```

5.  JSON Server will use the _db.json_ file in the project folder to serve mock data as defined in the file
6.  Run the mock API server

```
json-server --port 8080 --watch db.json
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

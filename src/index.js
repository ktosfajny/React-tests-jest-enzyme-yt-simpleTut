import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// yarn add -D enzyme enzyme-adapter-react-16 jest jest-enzyme

// For anyone using typescript with React, the testfiles should be App.test.tsx and "npm install -D @types/jest" and
// let component: ShallowWrapper
// These are the changes

// dodał linki do google fonts prosto w /public/index.html a potem użył tego fonta w src/app.scss

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

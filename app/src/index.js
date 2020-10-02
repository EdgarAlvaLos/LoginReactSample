import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "./vesta-icons.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import Utils from "./helpers/utils";
//Loads config from variables to APIContext
// - In development loads the data from .env.development
// - In production as tomcat container, it takes the values
//   from properties file
Utils.UpdateVestaConfig(window.VestaConfig);

//Render React App
ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

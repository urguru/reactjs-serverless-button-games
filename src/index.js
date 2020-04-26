import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {UsersProvider} from './Context'
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <UsersProvider>
    <Router>
      <App />
    </Router>
  </UsersProvider>,
  document.getElementById("root")
);

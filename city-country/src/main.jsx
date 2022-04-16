import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

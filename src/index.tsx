import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

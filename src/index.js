import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import Tapp from "./Tapp";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Tapp />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

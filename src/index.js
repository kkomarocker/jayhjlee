import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <Home style={{ fontFamily: "Roboto" }} />,
  document.getElementById("root")
);
registerServiceWorker();

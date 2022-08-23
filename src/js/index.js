//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import AppRoutes from "./routes";

//render your react application
ReactDOM.render(<AppRoutes />, document.querySelector("#app"));

import React from "react";
import ReactDOM from "react-dom";
import Chart from './Chart'

import "./index.css";

const App = () => (
  <div className="container">
    <Chart/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

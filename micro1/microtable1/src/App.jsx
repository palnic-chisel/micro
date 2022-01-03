import React from "react";
import ReactDOM from "react-dom";
import Table from './Table'

import "./index.css";

const App = () => (
  <div className="container">
    <Table/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

import React from "react";
import ReactDOM from "react-dom";
import Table from "microtable1/Table"
import Chart from "microchart1/Chart"

import "./index.css";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 300, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const App = () => (
  <div style={{display: 'flex', justifyContent:'flex-start'}}>
    <div style={{width: '50%'}}>
      <Table test={"ciao"} rows={rows}/>
    </div>
    <div style={{width: '50%'}}>
      <Chart/>
    </div>
    
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

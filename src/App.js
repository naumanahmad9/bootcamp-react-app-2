import React from "react";
import "./App.css";
import Lunch from "./lunch.js";

function App() {
  return (
    <div className="App">
      <h2>Bootcamp class 3</h2>
      <Lunch dishName="spaghetti" sweetDish="custard" />
      <hr />
    </div>
  );
}

export default App;

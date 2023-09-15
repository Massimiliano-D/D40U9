import React from "react";
import "./App.css";
import Meteo from "./componenti/Meteo";
function App() {
  return (
    <div className="container-fluid">
      <h1 className="m-3 p-3 text-center shadow-lg ">App Meteo</h1>
      <Meteo />
    </div>
  );
}

export default App;

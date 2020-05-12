import React from "react";
import "./App.css";
import Header from "./Header";
import Count from "./MetalCount";
import MetalList from "./MetalList";
import Counter from "./Count"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Count />

        <div className="MetalList"><MetalList /></div>
      </header>
    </div>
  );
}

export default App;

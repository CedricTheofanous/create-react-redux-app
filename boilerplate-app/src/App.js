import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./containers/MainContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainContainer></MainContainer>
      </header>
      <MainContainer></MainContainer>
    </div>
  );
}

export default App;

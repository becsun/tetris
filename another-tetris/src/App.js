import React from "react";
import "./App.css";
import Board from "./components/board/Board";
import StartingBlocks from "./components/startingBlocks/StartingBlocks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris </h1>
      </header>
      <StartingBlocks />
      <Board />
    </div>
  );
}

export default App;

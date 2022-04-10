import React, { useState } from "react";
import Board from "./Board.js";
import "./global.css";

function App() {
  const [currentPlayer, setNextPlayer] = useState({
    player: "Player-1",
    letter: "X",
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tic-Tac-Toe</h1>
      <p>
        {currentPlayer.player} {currentPlayer.letter}
      </p>
      <Board currentPlayer={currentPlayer} setNextPlayer={setNextPlayer} />
    </div>
  );
}

export default App;

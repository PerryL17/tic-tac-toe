import React, { useState, useEffect } from "react";
import Board from "./Board.js";
import "./global.css";
import { initialBoard } from "./const.js";
import { checkBoard } from "./util.js";

function App() {
  const [gameState, setGameState] = useState({
    currentPlayer: {
      player: "Player-1",
      letter: "X",
    },
    board: initialBoard,
  });
  const updateGameState = {
    markSquareAsOccupied: (id, playerLetter) => {
      //creating copy of currentGameState
      const newGameState = Object.assign({}, gameState);
      //a square is marked as occupied, so switch player
      newGameState.currentPlayer =
        gameState.currentPlayer.player === "Player-1"
          ? { player: "Player-2", letter: "O" }
          : { player: "Player-1", letter: "X" };
      //updating square on the board
      newGameState.board = gameState.board.map((square) => {
        if (id === square.id) {
          return { id: square.id, occupiedBy: playerLetter };
        } else {
          return square;
        }
      });

      setGameState(newGameState);
    },
  };
  useEffect(() => {
    checkBoard(gameState.board);
  }, [gameState]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tic-Tac-Toe</h1>
      <p>
        {gameState.currentPlayer.player} {gameState.currentPlayer.letter}
      </p>
      <Board gameState={gameState} updateGameState={updateGameState} />
    </div>
  );
}

export default App;

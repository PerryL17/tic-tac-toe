import React, { useState, useEffect } from "react";
import Square from "./Square.js";
import { checkBoard } from "./util.js";
import { initialBoard } from "./const.js";

function Board({ currentPlayer, setNextPlayer }) {
  const [board, setBoard] = useState(initialBoard);

  useEffect(() => {
    checkBoard(currentPlayer.letter, board);
  }, [board, currentPlayer]);

  const updateBoard = (id, playerLetter) => {
    const newBoard = board.map((square) => {
      if (id === square.id) {
        return { id: square.id, occupiedBy: playerLetter };
      } else {
        return square;
      }
    });

    setBoard(newBoard);
  };

  return (
    <div className="board">
      {board.map((item) => (
        <Square
          onUpdateBoard={updateBoard}
          key={item.id}
          squareItem={item}
          currentPlayer={currentPlayer}
          setNextPlayer={setNextPlayer}
        />
      ))}
    </div>
  );
}
export default Board;

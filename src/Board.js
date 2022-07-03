import React, { useState, useEffect } from "react";
import Square from "./Square.js";
import { checkBoard } from "./util.js";
import { initialBoard } from "./const.js";

function Board({ gameState, updateGameState }) {
  return (
    <div className="board">
      {gameState.board.map((item) => (
        <Square
          gameState={gameState}
          updateGameState={updateGameState}
          key={item.id}
          squareItem={item}
        />
      ))}
    </div>
  );
}
export default Board;

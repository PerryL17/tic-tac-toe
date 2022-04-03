import React from "react";
import Square from "./Square.js";
const initialBoard = [
  { id: 1, occupiedBy: "s" },
  { id: 2, occupiedBy: "q" },
  { id: 3, occupiedBy: "t" },
  { id: 4, occupiedBy: "r" },
  { id: 5, occupiedBy: "p" },
  { id: 6, occupiedBy: "c" },
  { id: 7, occupiedBy: "m" },
  { id: 8, occupiedBy: "n" },
  { id: 9, occupiedBy: "d" },
];
function Board() {
  return (
    <div className="board">
      {initialBoard.map((item) => (
        <Square key={item.id} squareItem={item} />
      ))}
    </div>
  );
}
export default Board;

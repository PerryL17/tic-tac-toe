import React, { useState, useEffect } from "react";
import Square from "./Square.js";

const initialBoard = [
  { id: 1, occupiedBy: "" },
  { id: 2, occupiedBy: "" },
  { id: 3, occupiedBy: "" },
  { id: 4, occupiedBy: "" },
  { id: 5, occupiedBy: "" },
  { id: 6, occupiedBy: "" },
  { id: 7, occupiedBy: "" },
  { id: 8, occupiedBy: "" },
  { id: 9, occupiedBy: "" },
];
const checkBoard = (playerLetter, board) => {
  //check row
  console.log("HI");
  const rowOne = board.filter(
    (square) => square.id === 1 || square.id === 2 || square.id === 3
  );
  const rowTwo = board.filter(
    (square) => square.id === 4 || square.id === 5 || square.id === 6
  );
  const rowThree = board.filter(
    (square) => square.id === 7 || square.id === 8 || square.id === 9
  );
  const isRowOneMatch =
    rowOne.filter((square) => square.occupiedBy === playerLetter).length === 3;

  const isRowTwoMatch =
    rowTwo.filter((square) => square.occupiedBy === playerLetter).length === 3;

  const isRowThreeMatch =
    rowThree.filter((square) => square.occupiedBy === playerLetter).length ===
    3;
  if (isRowOneMatch || isRowTwoMatch || isRowThreeMatch) {
    alert(`${playerLetter} Wins!`);
  }
  console.log(isRowOneMatch);
  console.log(board);
  console.log(playerLetter);
};
function Board({ currentPlayer, setNextPlayer }) {
  const [board, setBoard] = useState(initialBoard);

  useEffect(() => {
    checkBoard(currentPlayer.letter, board);
  }, [board]);

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

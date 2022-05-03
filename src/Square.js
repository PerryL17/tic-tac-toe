import React from "react";

function Square({ squareItem, currentPlayer, setNextPlayer, onUpdateBoard }) {
  const handleOnClick = (event, squareItem) => {
    event.preventDefault();
    /*change player*/

    if (squareItem.occupiedBy === "") {
      onUpdateBoard(squareItem.id, currentPlayer.letter);
      if (currentPlayer.player === "Player-1") {
        return setNextPlayer({ player: "Player-2", letter: "O" });
      } else {
        return setNextPlayer({ player: "Player-1", letter: "X" });
      }
    }
  };
  return (
    <div className="square" onClick={(e) => handleOnClick(e, squareItem)}>
      {squareItem.occupiedBy}
    </div>
  );
}

export default Square;

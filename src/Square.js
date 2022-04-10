import React from "react";

function Square({ squareItem, onClick, currentPlayer, setNextPlayer }) {
  const handleOnClick = (event) => {
    event.preventDefault();
    /*change player*/
    if (currentPlayer.player === "Player-1") {
      return setNextPlayer({ player: "Player-2", letter: "O" });
    } else {
      return setNextPlayer({ player: "Player-1", letter: "X" });
    }
  };
  return (
    <div className="square" onClick={handleOnClick}>
      {squareItem.occupiedBy}
    </div>
  );
}

export default Square;

import React from "react";

function Square({ squareItem, gameState, updateGameState }) {
  const handleOnClick = (event, squareItem) => {
    event.preventDefault();
    //change player and mark board
    updateGameState.markSquareAsOccupied(
      squareItem.id,
      gameState.currentPlayer.letter
    );
    return;
  };
  return (
    <div className="square" onClick={(e) => handleOnClick(e, squareItem)}>
      {squareItem.occupiedBy}
    </div>
  );
}

export default Square;

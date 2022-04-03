import React from "react";

function Square(props) {
  return <div className="square">{props.squareItem.occupiedBy}</div>;
}

export default Square;

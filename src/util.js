export const checkBoard = (playerLetter, board) => {
  //check row
  console.log("HI");
  const rowOne = filterBoardByIds(1, 2, 3, board);
  const rowTwo = filterBoardByIds(4, 5, 6, board);
  const rowThree = filterBoardByIds(7, 8, 9, board);
  const isRowOneMatch = filterMatch(rowOne, playerLetter);

  const isRowTwoMatch = filterMatch(rowTwo, playerLetter);
  const isRowThreeMatch = filterMatch(rowThree, playerLetter);

  if (isRowOneMatch || isRowTwoMatch || isRowThreeMatch) {
    alert(`${playerLetter} Wins!`);
  }
  console.log(isRowOneMatch);
  console.log(board);
  console.log(playerLetter);
  //check column
  const columnOne = filterBoardByIds(1, 4, 7, board);
  const columnTwo = filterBoardByIds(2, 5, 8, board);
  const columnThree = filterBoardByIds(3, 6, 9, board);

  const isColumnOneMatch = filterMatch(columnOne, playerLetter);
  const isColumnTwoMatch = filterMatch(columnTwo, playerLetter);
  const isColumnThreeMatch = filterMatch(columnThree, playerLetter);

  if (isColumnOneMatch || isColumnTwoMatch || isColumnThreeMatch) {
    alert(`${playerLetter} Wins!`);
  }
  //check diagonal
  const diagonalOne = filterBoardByIds(1, 5, 8, board);
  const diagonalTwo = filterBoardByIds(3, 5, 7, board);

  const isDiagonalOneMatch = filterMatch(diagonalOne, playerLetter);
  const isDiagonalTwoMatch = filterMatch(diagonalTwo, playerLetter);

  if (isDiagonalOneMatch || isDiagonalTwoMatch) {
    alert(`${playerLetter} Wins!`);
  }
};
const filterBoardByIds = (idOne, idTwo, idThree, board) => {
  board.filter(
    (square) =>
      square.id === idOne || square.id === idTwo || square.id === idThree
  );
};
const filterMatch = (direction, playerLetter) => {
  return (
    direction.filter((square) => square.occupiedBy === playerLetter).length ===
    3
  );
};

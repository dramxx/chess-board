const chessBoard = document.getElementsByClassName(`chess-board`)[0];
const square = `<div class="square flex"/>`;

[...Array(64)].map(() => {
  chessBoard.innerHTML += square;
});

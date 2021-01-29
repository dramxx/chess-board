const BOARD_RANKS = ["A", "B", "C", "D", "E", "F", "G", "H"];
const BOARD_FILES = ["1", "2", "3", "4", "5", "6", "7", "8"];

const chessBoard = document.getElementsByClassName(`chess-board`)[0];

const square = `<div class='square flex'/>`;

[...Array(64)].map((_, i) => {
  chessBoard.innerHTML += square;

  let currentSquare = document.getElementsByClassName("square")[i];

  const squaresPerEdge = 8;
  const numberOfSquares = 64;
  const renderBothNotations = i === numberOfSquares - squaresPerEdge;
  const renderFileNotation = i === 0 || i % squaresPerEdge === 0;

  const renderRankNotation = [...Array(numberOfSquares).keys()]
    .slice(-squaresPerEdge)
    .includes(i);

  // TODO: remove padding hack
  if (renderBothNotations) {
    currentSquare.innerHTML += `<div> <div style="padding-top: 80px;" class="file">1</div> <div style="color: #333; padding-top: 15px; class="rank">A</div> </div>`;
    return;
  }

  if (renderFileNotation) {
    let fileNotation = BOARD_FILES[BOARD_FILES.length - 1 - i / squaresPerEdge];
    currentSquare.innerHTML += `<div class="file">` + fileNotation + `</div>`;
    return;
  }

  if (renderRankNotation) {
    let rankNotation = BOARD_RANKS[squaresPerEdge - numberOfSquares + i];
    currentSquare.innerHTML += `<div class="rank">` + rankNotation + `</div>`;
    return;
  }
});

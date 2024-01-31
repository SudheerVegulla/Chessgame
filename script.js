document.addEventListener("DOMContentLoaded", function () {
  const board = document.getElementById("chessboard");

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.classList.add(row % 2 === 0 ? "even-row" : "odd-row");
      square.classList.add(col % 2 === 0 ? "even-col" : "odd-col");
      square.dataset.row = row;
      square.dataset.col = col;

      square.addEventListener("mouseover", function () {
        square.classList.add("hover");
        highlightSquares(row, col);
      });

      square.addEventListener("mouseout", function () {
        square.classList.remove("hover");
        resetBoard();
      });

      board.appendChild(square);
    }
  }

  function highlightSquares(hoveredRow, hoveredCol) {
    const squares = board.getElementsByClassName("square");

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (Math.abs(i - hoveredRow) === Math.abs(j - hoveredCol)) {
          const squareIndex = i * 8 + j;
          const square = squares[squareIndex];

          if (i !== hoveredRow || j !== hoveredCol) {
            square.classList.add("attack");
          }
        }
      }
    }
  }

  function resetBoard() {
    const squares = board.getElementsByClassName("square");

    Array.from(squares).forEach((square) => {
      square.classList.remove("attack");
    });
  }
});

import React, { useState, useEffect } from 'react';

const SIZE = 4; // Size of the game board (4x4 for a 15 Puzzle)
const TOTAL_TILES = SIZE * SIZE;

function Game15Puzzle() {
  const [board, setBoard] = useState(generateBoard());
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    checkWin();
  }, [board]);

  function generateBoard() {
    // Generate a solved puzzle board
    const solvedBoard = Array.from({ length: SIZE }, (_, row) =>
      Array.from({ length: SIZE }, (_, col) => row * SIZE + col + 1)
    );
    solvedBoard[SIZE - 1][SIZE - 1] = null; // Empty space

    // Shuffle the board by making random moves
    const shuffledBoard = solvedBoard.map((row) => [...row]);
    const shuffleCount = 120; // Number of random moves to shuffle
    let emptyRow = SIZE - 1;
    let emptyCol = SIZE - 1;

    for (let i = 0; i < shuffleCount; i++) {
      const directions = [];
      if (emptyRow > 0) directions.push('up');
      if (emptyRow < SIZE - 1) directions.push('down');
      if (emptyCol > 0) directions.push('left');
      if (emptyCol < SIZE - 1) directions.push('right');

      const randomDirection = directions[Math.floor(Math.random() * directions.length)];

      switch (randomDirection) {
        case 'up':
          shuffledBoard[emptyRow][emptyCol] = shuffledBoard[emptyRow - 1][emptyCol];
          shuffledBoard[emptyRow - 1][emptyCol] = null;
          emptyRow--;
          break;
        case 'down':
          shuffledBoard[emptyRow][emptyCol] = shuffledBoard[emptyRow + 1][emptyCol];
          shuffledBoard[emptyRow + 1][emptyCol] = null;
          emptyRow++;
          break;
        case 'left':
          shuffledBoard[emptyRow][emptyCol] = shuffledBoard[emptyRow][emptyCol - 1];
          shuffledBoard[emptyRow][emptyCol - 1] = null;
          emptyCol--;
          break;
        case 'right':
          shuffledBoard[emptyRow][emptyCol] = shuffledBoard[emptyRow][emptyCol + 1];
          shuffledBoard[emptyRow][emptyCol + 1] = null;
          emptyCol++;
          break;
        default:
          break;
      }
    }

    return shuffledBoard;
  }

  function checkWin() {
    // Check if the board is in the solved state
    const flatBoard = board.flat();
    for (let i = 0; i < TOTAL_TILES - 1; i++) {
      if (flatBoard[i] !== i + 1) return;
    }
    alert(`You won in ${moves} moves!`);
  }

  function handleTileClick(row, col) {
    // Handle tile click and move if valid
    if (isValidMove(row, col)) {
      const newBoard = [...board];
      const emptyRow = findEmptyTile().row;
      const emptyCol = findEmptyTile().col;

      newBoard[emptyRow][emptyCol] = newBoard[row][col];
      newBoard[row][col] = null;

      setBoard(newBoard);
      setMoves(moves + 1);
    }
  }

  function isValidMove(row, col) {
    // Check if the clicked tile can be moved
    const emptyTile = findEmptyTile();
    return (
      (row === emptyTile.row && Math.abs(col - emptyTile.col) === 1) ||
      (col === emptyTile.col && Math.abs(row - emptyTile.row) === 1)
    );
  }

  function findEmptyTile() {
    // Find the coordinates of the empty tile
    for (let row = 0; row < SIZE; row++) {
      for (let col = 0; col < SIZE; col++) {
        if (board[row][col] === null) {
          return { row, col };
        }
      }
    }
  }

  return (
    <div className='flex w-full font-[Courgette]'>
      <img className='w-1/2 hidden md:block' src="./src/Components/Games/Game15Puzzle/images.png" alt="IMG" />
      <div className="w-full md:w-1/2 min-h-screen flex items-center justify-center bg-[url(./src/Components/Games/Game15Puzzle/bg2.jpg)]">
        <div className="bg-green-200 rounded-lg p-4 shadow-lg">
          <h1 className="text-3xl mb-4 text-emerald-500 text-center font-[Courgette]">15Puzzle Game</h1>
          <p>Moves: {moves}</p>
          <div className="grid grid-cols-4 gap-2">
            {board.map((row, rowIndex) => (
              row.map((col, colIndex) => (
                <div
                  key={rowIndex * SIZE + colIndex}
                  className={`bg-blue-500 rounded-lg p-4 text-white font-bold text-xl flex items-center justify-center cursor-pointer hover:bg-blue-600 ${col === null ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  onClick={() => handleTileClick(rowIndex, colIndex)}
                >
                  {col}
                </div>
              ))
            ))}
          </div>
          <button
            className="bg-green-500 font-sans text-white font-semibold py-2 px-4 rounded-full mt-4 hover:bg-green-600"
            onClick={() => setBoard(generateBoard())}
          >
            Shuffle
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game15Puzzle;
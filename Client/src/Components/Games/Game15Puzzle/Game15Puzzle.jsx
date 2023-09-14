import React, { useState, useEffect } from 'react';
import Game15PuzzleUI from './Game15PuzzleUI';

const SIZE = 4; // Size of the game board (4x4 for a 15 Puzzle)
const TOTAL_TILES = SIZE * SIZE;

function Game15Puzzle() {
  const [moves, setMoves] = useState(0);
  const [board, setBoard] = useState(generateBoard());

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
    setMoves(0);
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
   <Game15PuzzleUI moves={moves} board={board} SIZE={SIZE} setBoard={setBoard} generateBoard={generateBoard} handleTileClick={handleTileClick}/>
  );
}

export default Game15Puzzle;
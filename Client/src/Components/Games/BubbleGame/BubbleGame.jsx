import React, { useState, useEffect } from 'react';

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  const [score, setScore] = useState(0);
  const [hitNum, setHitNum] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [bubbleGrid, setBubbleGrid] = useState([]);
  const [isWinner, setIsWinner] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    updateMusicControlText();
  };

  const updateMusicControlText = () => {
    return isMusicPlaying ? 'Pause' : 'Play';
  };

  const increaseScore = () => {
    const newScore = score + 10;
    setScore(newScore);

    if (newScore === 500) {
      setIsWinner(true);
    }
  };

  const newHit = () => {
    setHitNum(Math.floor(Math.random() * 10));
  };

  const makeBubbleGrid = () => {
    const grid = [];
    for (let row = 0; row < 10; row++) {
      const rowArray = [];
      for (let col = 0; col < 10; col++) {
        const num = Math.floor(Math.random() * 10);
        rowArray.push({ value: num, clicked: false });
      }
      grid.push(rowArray);
    }
    setBubbleGrid(grid);
  };

  useEffect(() => {
    if (timer > 0 && gameStarted) {
      const time = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(time);
    } else if (timer === 0 && gameStarted) {
      setIsGameOver(true);
      setGameStarted(false);
    }
  }, [timer, gameStarted]);

  const handleBubbleClick = (row, col) => {
    if (bubbleGrid[row][col].value === hitNum) {
      if (!bubbleGrid[row][col].clicked) {
        increaseScore();
        newHit();
        bubbleGrid[row][col].clicked = true;
        setBubbleGrid([...bubbleGrid]);
      }
    }
  };

  const startGame = () => {
    setIsWinner(false);
    setIsGameOver(false);
    setGameStarted(true);
    setTimer(60);
    makeBubbleGrid();
    newHit();
    setScore(0);
  };

  const restartGame = () => {
    setIsWinner(false);
    setIsGameOver(false);
    setTimer(60); // Reset timer to the initial value
    setIsMusicPlaying(false); // Stop music
    setGameStarted(true); // Start the game
    newHit(); // Generate a new hit number
    setScore(0); // Reset the score
    makeBubbleGrid(); // Generate a new bubble grid
  };

  return (
    <div className="bg-[Images/bgc.jpg] w-full h-screen flex flex-col items-center justify-center relative">
      {gameStarted ? (
        <>
          <button
            className="bg-[#88adfc] mb-10 rounded-full border-none px-5 py-2 shadow-md hover:bg-[#4845e0] text-white"
            onClick={toggleMusic}
          >
            {updateMusicControlText()}
          </button>
          <button
            className="bg-[#ff4b4b] rounded-full border-none px-5 py-2 shadow-md hover:bg-[#e00e0e] text-white"
            onClick={restartGame}
          >
            RESTART
          </button>
          <div className="overflow-hidden w-80 h-80 rounded-15 bg-[Images/img.jpg]">
            <div className="p-0 25% flex items-center justify-between text-white w-full h-100 bg-[#09003c]">
              <div className="flex items-center gap-15">
                <h3>Hit</h3>
                <div className="box">{hitNum}</div>
              </div>
              <div className="flex items-center gap-15">
                <h3>Timer</h3>
                <div className="box">{timer}</div>
              </div>
              <div className="flex items-center gap-15">
                <h3>Score</h3>
                <div className="box">{score}</div>
              </div>
            </div>
            <div
              className="m-auto grid grid-cols-10 grid-rows-10 gap-2 w-full h-[calc(100%-100px)] p-20"
            >
              {bubbleGrid.map((row, rowIndex) =>
                row.map((bubble, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`bubble ${bubble.clicked ? 'clicked' : ''}`}
                    onClick={() => handleBubbleClick(rowIndex, colIndex)}
                  >
                    {bubble.value}
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      ) : (
        <button
          id="startButton"
          className="bg-[#212771] block m-auto mt-10 rounded-20 px-10 py-4 border-none text-white shadow-md text-30 font-[Ewert] hover:bg-[#2b2121]"
          onClick={startGame}
        >
          START
        </button>
      )}
      {isWinner && (
        <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-80 text-white">
          <div className="text-4xl mb-8">Congratulations, you win the game!</div>
          <button
            className="bg-[#ff4b4b] rounded-full border-none px-5 py-2 shadow-md hover:bg-[#e00e0e] text-white"
            onClick={restartGame}
          >
            RESTART
          </button>
        </div>
      )}
      {isGameOver && (
        <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-80 text-white">
          <div className="text-4xl mb-8">Game Over!</div>
          <button
            className="bg-[#ff4b4b] rounded-full border-none px-5 py-2 shadow-md hover:bg-[#e00e0e] text-white"
            onClick={restartGame}
          >
            RESTART
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
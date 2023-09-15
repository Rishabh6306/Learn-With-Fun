import React, { useState, useEffect } from 'react';
import { GiFastBackwardButton } from 'react-icons/gi'

function BubbleGame() {
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

        if (newScore === 300) {
            setIsWinner(true);
        }
    };

    const newHit = () => {
        setHitNum(Math.floor(Math.random() * 10));
    };

    const makeBubbleGrid = () => {
        const grid = [];
        for (let row = 0; row < 8; row++) {
            const rowArray = [];
            for (let col = 0; col < 11; col++) {
                const num = Math.floor(Math.random() * 10);
                const backgroundColor = getRandomBubbleColor();
                rowArray.push({ value: num, clicked: false, backgroundColor });
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

                // Shuffle the numbers in the grid
                const newBubbleGrid = [...bubbleGrid];
                for (let i = newBubbleGrid.length - 1; i > 0; i--) {
                    for (let j = newBubbleGrid[i].length - 1; j > 0; j--) {
                        const x = Math.floor(Math.random() * (i + 1));
                        const y = Math.floor(Math.random() * (j + 1));
                        const temp = newBubbleGrid[i][j].value;
                        newBubbleGrid[i][j].value = newBubbleGrid[x][y].value;
                        newBubbleGrid[x][y].value = temp;
                    }
                }

                setBubbleGrid(newBubbleGrid);
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
        setTimer(60);
        setIsMusicPlaying(false);
        setGameStarted(true);
        newHit();
        setScore(0);
        makeBubbleGrid();
    };

    const getRandomBubbleColor = () => {
        const colors = [
            'bg-red-500',
            'bg-blue-500',
            'bg-green-500',
            'bg-yellow-500',
            'bg-pink-500',
            'bg-purple-500',
            'bg-indigo-500',
            'bg-teal-500',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    function goBack() {
        window.history.back(); // This line takes the user back to the previous page
    }

    return (
        <div className="bg-[url(./src/Components/Games/BubbleGame/bgc1.jpg)] bg-cover bg-center w-full h-screen flex flex-col items-center justify-center relative">

            {gameStarted ? (
                <>
                    <span>
                        <button onClick={goBack} className="bg-blue-800 text-white px-4 py-2 m-3 ml-7 rounded-md"><GiFastBackwardButton /></button>
                        <button
                            className="bg-blue-500 my-5 mr-6 rounded-full border-none px-8 py-2 shadow-md hover:bg-blue-700 text-white"
                            onClick={toggleMusic}
                        >
                            {updateMusicControlText()}
                        </button>
                        <button
                            className="bg-red-500 mb-4 rounded-full border-none px-5 py-2 shadow-md hover:bg-red-700 text-white"
                            onClick={restartGame}
                        >
                            RESTART
                        </button>
                    </span>
                    <div className="overflow-hidden h-[80%] w-fit bg-[url(./src/Components/Games/BubbleGame/bgc5.png)] bg-cover rounded-2xl">
                        <div className="py-3 flex items-center justify-around text-white bg-[#240e74]">
                            <span><strong>Hit: </strong>{hitNum}</span>
                            <span><strong>Timer: </strong>{timer}</span>
                            <span><strong>Score: </strong>{score}</span>
                        </div>
                        <div className="m-auto grid grid-cols-[repeat(8,31px)]  ssm:grid-cols-[repeat(11,31px)] sm:grid-cols-[repeat(11,40px)] xl:grid-cols-[repeat(11,60px)] gap-0 xl:gap-2 h-[calc(100%-100px)] p-4 sm:p-12">
                            {bubbleGrid.map((row, rowIndex) =>
                                row.map((bubble, colIndex) => (
                                    <div
                                        key={`${rowIndex}-${colIndex}`}
                                        className={`cursor-pointer text-white h-7 w-7 md:h-10 md:w-10 rounded-full flex items-center justify-center transition-background-color duration-300 hover:bg-blue-400 ${bubble.backgroundColor}`}
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
                <div className="flex items-center justify-center flex-col bg-[url(./src/Components/Games/BubbleGame/StartBgc.png)] bg-center bg-cover w-full h-full">
                    <button id="startButton"
                        className="bg-gradient-to-tr from-green-500 to-purple-500 mb-4 rounded-2xl px-14 py-6 border-none text-white shadow-md text-4xl font-[Ewert]"
                        onClick={startGame}
                    >
                        Start
                    </button>
                    {isGameOver && (
                        <div className="text-4xl mb-4 text-white">Game Over!</div>
                    )}
                </div>
            )}
            {isWinner && (
                <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-80 text-white">
                    <div className="text-4xl m-5 sm:mb-8">Congratulations, you win the game!</div>
                    <button
                        className="bg-red-500 rounded-full border-none px-5 py-2 shadow-md hover:bg-red-700 text-white"
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
                        className="bg-red-500 rounded-full border-none px-5 py-2 shadow-md hover:bg-red-700 text-white"
                        onClick={restartGame}
                    >
                        RESTART
                    </button>
                </div>
            )}
        </div>
    );
}

export default BubbleGame;
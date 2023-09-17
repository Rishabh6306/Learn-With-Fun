import React, { useState, useEffect } from 'react';
import BubbleGameUI from './BubbleGameUI';

// Function to get a random bubble color
const getRandomBubbleColor = () => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-pink-500', 'bg-purple-500', 'bg-indigo-500', 'bg-teal-500'];
    return colors[Math.floor(Math.random() * colors.length)];
};

// Function to shuffle a 2D array
const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        for (let j = newArray[i].length - 1; j > 0; j--) {
            const x = Math.floor(Math.random() * (i + 1));
            const y = Math.floor(Math.random() * (j + 1));
            [newArray[i][j].value, newArray[x][y].value] = [newArray[x][y].value, newArray[i][j].value];
        }
    }
    return newArray;
};

const BubbleGame = () => {
    // State variables
    const [timer, setTimer] = useState(60);
    const [score, setScore] = useState(0);
    const [hitNum, setHitNum] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [bubbleGrid, setBubbleGrid] = useState([]);
    const [isWinner, setIsWinner] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);

    // Function to increase the score
    const increaseScore = () => {
        const newScore = score + 10;
        setScore(newScore);

        if (newScore >= 200) {
            setIsWinner(true);
        }
    };

    // Function to generate a new hit number
    const newHit = () => setHitNum(Math.floor(Math.random() * 10));

    // Function to create the initial bubble grid
    const makeBubbleGrid = () => {
        const grid = Array.from({ length: 8 }, () =>
            Array.from({ length: 11 }, () => ({
                value: Math.floor(Math.random() * 10),
                clicked: false,
                backgroundColor: getRandomBubbleColor(),
            }))
        );
        setBubbleGrid(shuffleArray(grid));
    };

    // Effect to start the timer and handle game over
    useEffect(() => {
        let interval;
        if (timer > 0 && gameStarted) {
            interval = setInterval(() => setTimer(timer - 1), 1000);
        } else if (timer === 0 && gameStarted) {
            setIsGameOver(true);
            setGameStarted(false);
        }
        return () => clearInterval(interval);
    }, [timer, gameStarted]);

    // Function to handle bubble click
    const handleBubbleClick = (row, col) => {
        const clickedBubble = bubbleGrid[row][col];

        if (!clickedBubble.clicked) {
            if (clickedBubble.value === hitNum) {
                // If the clicked bubble matches the hit number, increase the score
                increaseScore();

                // Mark the bubble as clicked
                const updatedBubbleGrid = bubbleGrid.map((gridRow) =>
                    gridRow.map((bubble) =>
                        bubble === clickedBubble ? { ...bubble, clicked: true } : bubble
                    )
                );
                setBubbleGrid(updatedBubbleGrid);
                newHit();
                setBubbleGrid((prevGrid) => shuffleArray([...prevGrid]));
            } else {
                // If the clicked bubble does not match the hit number, decrease the score
                const newScore = score - 10;
                setScore(newScore);
            }
        } else {
            // If the bubble is already clicked, make it clickable again
            const updatedBubbleGrid = bubbleGrid.map((gridRow) =>
                gridRow.map((bubble) =>
                    bubble === clickedBubble ? { ...bubble, clicked: false } : bubble
                )
            );
            setBubbleGrid(updatedBubbleGrid);
        }
    };

    // Function to start a new game
    const startGame = () => {
        setIsWinner(false);
        setIsGameOver(false);
        setGameStarted(true);
        setTimer(60);
        makeBubbleGrid();
        newHit();
        setScore(0);
    };

    // Function to restart the game
    const restartGame = () => {
        setIsWinner(false);
        setIsGameOver(false);
        setTimer(60);
        setGameStarted(true);
        newHit();
        setScore(0);
        makeBubbleGrid();
    };

    // Function to go back to the previous page
    const goBack = () => window.history.back();

    return (
      <BubbleGameUI startGame={startGame} gameStarted={gameStarted} goBack={goBack} restartGame={restartGame} isGameOver={isGameOver} isWinner={isWinner} hitNum={hitNum} timer={timer} score={score} bubbleGrid={bubbleGrid} handleBubbleClick={handleBubbleClick}/>
    );
};

export default BubbleGame;
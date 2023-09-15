import React from 'react'
import { GiFastBackwardButton } from 'react-icons/gi';

function BubbleGameUI({ startGame, gameStarted, goBack, restartGame, isGameOver, isWinner, hitNum, timer, score, bubbleGrid, handleBubbleClick }) {
    return (
        <div className="bg-[url(./src/Components/Games/BubbleGame/bgc1.jpg)] bg-cover bg-center w-full h-screen flex flex-col items-center justify-center relative">
            {gameStarted ? (
                <>
                    <span>
                        <button onClick={goBack} className="bg-blue-800 text-white px-4 py-2 m-3 ml-7 rounded-md">
                            <GiFastBackwardButton />
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
                        <div className="m-auto grid grid-cols-[repeat(8,31px)] ssm:grid-cols-[repeat(11,31px)] sm:grid-cols-[repeat(11,40px)] xl:grid-cols-[repeat(11,60px)] gap-0 xl:gap-2 h-[calc(100%-100px)] p-4 sm:p-12">
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
                    {isGameOver && !isWinner && (
                        <div className="text-4xl mb-4 text-white">Game Over!</div>
                    )}
                    <button
                        id="startButton"
                        className="bg-gradient-to-tr from-green-500 to-purple-500 mb-4 rounded-2xl px-14 py-6 border-none text-white shadow-md text-4xl font-[Ewert]"
                        onClick={startGame}
                    >
                        {isGameOver ? 'Restart' : 'Start'}
                    </button>
                </div>
            )}
            {isWinner && (
                <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-80 text-white">
                    <div className="text-4xl mb-8">
                        Congratulations, you win the game!
                    </div>
                    <button
                        className="bg-red-500 rounded-full border-none px-5 py-2 shadow-md hover:bg-red-700 text-white"
                        onClick={restartGame}
                    >
                        RESTART
                    </button>
                </div>
            )}
        </div>
    )
}

export default BubbleGameUI
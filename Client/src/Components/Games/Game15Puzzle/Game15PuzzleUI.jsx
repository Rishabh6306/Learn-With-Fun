import React from 'react'
import { GiFastBackwardButton } from 'react-icons/gi'

function Game15PuzzleUI({ goBack, checkWin, moves, board, SIZE, setBoard, generateBoard, handleTileClick }) {
    return (
        <div className='flex w-full font-[Courgette]'>
            {/* Left section with an image */}
            <img className='w-1/2 hidden md:block' src="/15puzzle.webp" alt="IMG" />

            {/* Right section containing the game */}
            <div className="w-full md:w-1/2 min-h-screen flex flex-col items-center justify-center" style={{backgroundImage: 'url(/15puzzlebgc.jpg)'}}>
                {/* Button to go back */}
                <button onClick={goBack} className="bg-blue-800 text-white px-4 py-2 m-3 rounded-md"><GiFastBackwardButton /></button>

                {/* Game container */}
                <div className="bg-green-200 rounded-lg p-4 shadow-lg">
                    <h1 className="text-3xl mb-4 text-emerald-500 text-center font-[Courgette]">15Puzzle Game</h1>

                    {/* Display the number of moves */}
                    <p>Moves: {moves}</p>

                    {/* Grid for the game tiles */}
                    <div className="grid grid-cols-4 gap-2">
                        {board.map((row, rowIndex) => (
                            row.map((col, colIndex) => (
                                <div
                                    key={rowIndex * SIZE + colIndex}
                                    className={`bg-blue-500 rounded-lg p-4 text-white font-bold text-xl flex items-center justify-center cursor-pointer hover:bg-emerald-700 ${col === null ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                                    onClick={() => handleTileClick(rowIndex, colIndex)}
                                >
                                    {col}
                                </div>
                            ))
                        ))}
                    </div>

                    {/* Button to shuffle the board */}
                    <button
                        className="bg-green-500 font-sans text-white font-semibold py-2 px-4 rounded-full mt-4 hover:bg-green-600"
                        onClick={() => setBoard(generateBoard())}
                    >
                        Shuffle
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Game15PuzzleUI;
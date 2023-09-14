import React from 'react'

function Game15PuzzleUI({ moves, board, SIZE, setBoard, generateBoard, handleTileClick }) {
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
                                    className={`bg-blue-500 rounded-lg p-4 text-white font-bold text-xl flex items-center justify-center cursor-pointer hover:bg-emerald-700 ${col === null ? 'bg-gray-100 cursor-not-allowed' : ''}`}
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
    )
}

export default Game15PuzzleUI;
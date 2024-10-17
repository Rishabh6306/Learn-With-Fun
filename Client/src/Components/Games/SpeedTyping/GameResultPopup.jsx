// GameResultPopup.js
import React from 'react';

function GameResultPopup({ timeLeft, mistakes, currentWpm, accuracy, resetGame, goBack }) {
    const { minutes, seconds } = timeLeft; // Destructure minutes and seconds

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-bold mb-4">Game Over!</h2>
                <p className="mb-2"><strong>Time Taken:</strong> {minutes}m {seconds}s</p>
                <p className="mb-2"><strong>Mistakes:</strong> {mistakes}</p>
                <p className="mb-2"><strong>WPM:</strong> {currentWpm}</p>
                <p className="mb-2"><strong>Accuracy:</strong> {accuracy}%</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        onClick={resetGame}
                    >
                        Try Again
                    </button>
                    <button
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                        onClick={goBack}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GameResultPopup;
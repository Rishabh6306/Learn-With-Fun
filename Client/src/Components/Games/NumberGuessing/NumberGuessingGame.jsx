import React, { useState } from "react";

function NumberGuessingGame() {
    const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
    const [currentGuess, setCurrentGuess] = useState("");
    const [guesses, setGuesses] = useState([]);
    const [message, setMessage] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("");
    const [progressWidth, setProgressWidth] = useState(0);

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function handleGuess() {
        const guess = parseInt(currentGuess);

        if (!isNaN(guess)) {
            const newGuesses = [...guesses, guess];
            setGuesses(newGuesses);

            if (guess === targetNumber) {
                setMessage("Congratulations! You guessed the correct number.");
                setBackgroundColor("bg-green-400");
                setTimeout(() => {
                    setTargetNumber(generateRandomNumber());
                    setGuesses([]);
                    setMessage("");
                    setBackgroundColor("");
                    setProgressWidth(0);
                }, 2000);
            } else if (guess < targetNumber) {
                setMessage("Try a higher number.");
                setBackgroundColor("bg-red-400");
            } else {
                setMessage("Try a lower number.");
                setBackgroundColor("bg-red-400");
            }

            const calculatedWidth = (Math.abs(targetNumber - guess) / 100) * 100;
            setProgressWidth(100 - calculatedWidth);
        } else {
            setMessage("Please enter a valid number.");
            setBackgroundColor("bg-red-400");
        }

        setCurrentGuess("");
    }

    return (
        <div className={`min-h-screen flex items-center justify-center ${backgroundColor}`}>
            <div className="container mx-auto p-6 bg-white rounded-md shadow-md">
                <h1 className="text-3xl font-semibold mb-4">Number Guessing Game</h1>
                <p>Guess a number between 1 and 100:</p>
                <input
                    type="number"
                    value={currentGuess}
                    onChange={(e) => setCurrentGuess(e.target.value)}
                    className="border rounded-md px-2 py-1 mt-2"
                    min="1"
                    max="100"
                />
                <button onClick={handleGuess} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
                    Guess
                </button>
                {message && (
                    <div className={`mt-4 text-center text-xl font-semibold ${backgroundColor}`}>
                        {message}
                    </div>
                )}
                <div className="mt-4">
                    <p>Your Previous Guesses:</p>
                    <ul>
                        {guesses.map((guess, index) => (
                            <li key={index}>{guess}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4">
                    <div className="bg-gray-300 h-4 rounded-md">
                        <div
                            className={`h-full ${backgroundColor} duration-500`}
                            style={{ width: `${progressWidth}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NumberGuessingGame;

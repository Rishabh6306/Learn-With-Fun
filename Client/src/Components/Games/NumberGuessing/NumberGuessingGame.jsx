import React, { useState } from "react";

function NumberGuessingGame() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [message, setMessage] = useState("");

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function calculateProgress() {
    const guess = parseInt(currentGuess);

    if (!isNaN(guess)) {
      if (guess >= 100) {
        return 100;
      }

      const distance = Math.abs(targetNumber - guess);
      return Math.min(100, Math.max(50, 100 - (distance * 100) / 100));
    }
    return 0;
  }

  function handleGuess() {
    const guess = parseInt(currentGuess);

    if (isNaN(guess)) {
      setMessage("Please enter a valid number.");
    } else {
      const newGuesses = [...guesses, guess];
      setGuesses(newGuesses);

      if (guess === targetNumber) {
        setMessage("Congratulations! You guessed the correct number.");
        setTimeout(() => {
          setTargetNumber(generateRandomNumber());
          setGuesses([]);
          setMessage("");
        }, 4000);
      } else {
        setMessage(guess < targetNumber ? "Try a higher number." : "Try a lower number.");
      }
    }

    setCurrentGuess("");
  }

  return (
    <div className='h-[80vh] flex items-center justify-center bg-[url(./src/Components/Games/NumberGuessing/bgc.jpg)] bg-center bg-cover'>
      <div className="md:mx-auto p-4 mx-4 sm:p-6 bg-white rounded-md shadow-md w-96">
        <h1 className="text-3xl font-semibold mb-4 text-center">Number Guessing Game</h1>
        <p>Guess a number between 1 and 100:</p>
        <input
          type="number"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
          className="border-2 border-gray-400 outline-none w-full ssm:w-4/6 rounded-md px-2 py-1 mt-2"
          min="1"
          max="100"
        />
        <button onClick={handleGuess} className="bg-blue-500 text-white px-4 py-2 m-3 rounded-md">
          Guess
        </button>
        {message && (
          <div className="mt-4 text-center break-words text-xl font-semibold">
            {message}
          </div>
        )}
        <div className="mt-4">
        <div className="bg-gray-300 h-4 rounded-md">
            <div
              className={`h-full bg-gradient-to-tr from-green-500 to-violet-500 duration-500`}
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-4 max-h-36 overflow-x-scroll">
          <h3 className="text-center">Your Previous Guesses:</h3>
          <ul>
            {guesses.map((guess, index) => (
              <li key={index}>{guess}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NumberGuessingGame;
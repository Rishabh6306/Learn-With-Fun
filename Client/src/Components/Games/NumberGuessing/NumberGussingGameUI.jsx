import React from 'react'
import { GiFastBackwardButton } from 'react-icons/gi'

function NumberGussingGameUI({ goBack, currentGuess, handleKeyPress, setCurrentGuess, handleGuess, message, calculateProgress, guesses }) {
  return (
    <div className="h-screen bg-center bg-cover" style={{backgroundImage: 'url(/numberGuessingBgc.jpg)'}}>
      {/* Go back button */}
      <button onClick={goBack} className="bg-blue-800 text-white px-4 py-2 m-3 rounded-md"><GiFastBackwardButton /></button>

      {/* Game content */}
      <div className='flex mt-10 sm:mt-24 items-center justify-center'>
        <div className="md:mx-auto p-4 mx-4 sm:p-6 bg-white rounded-md shadow-md w-96">
          <h1 className="text-3xl font-semibold mb-4 text-center">Number Guessing Game</h1>
          <p>Guess a number between 1 and 100:</p>

          {/* Input field for entering guesses */}
          <input
            type="number"
            value={currentGuess}
            onKeyPress={handleKeyPress}
            onChange={(e) => setCurrentGuess(e.target.value)}
            className="border-2 border-gray-400 outline-none w-full ssm:w-4/6 rounded-md px-2 py-1 mt-2"
            min="1"
            max="100"
          />

          {/* Guess button */}
          <button onClick={handleGuess} className="bg-blue-500 text-white px-4 py-2 m-3 rounded-md">
            Guess
          </button>

          {/* Message displaying game feedback */}
          {message && (
            <div className="mt-4 text-center break-words text-xl font-semibold">
              {message}
            </div>
          )}

          {/* Progress bar showing how close the guess is */}
          <div className="mt-4">
            <div className="bg-gray-300 h-4 rounded-md">
              <div
                className={`h-full bg-gradient-to-tr from-green-500 to-violet-500 duration-500`}
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
          </div>

          {/* List of previous guesses */}
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
    </div>
  )
}

export default NumberGussingGameUI;
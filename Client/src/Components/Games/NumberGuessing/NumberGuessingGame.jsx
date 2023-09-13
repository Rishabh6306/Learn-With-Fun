import React, { useState } from "react";
import NumberGussingGameUI from "./NumberGussingGameUI";

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

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleGuess();
    }
  }


  function goBack() {
    window.history.back(); // This line takes the user back to the previous page
  }

  return (
   <NumberGussingGameUI goBack={goBack} currentGuess={currentGuess} handleKeyPress={handleKeyPress} setCurrentGuess={setCurrentGuess} guesses={guesses} handleGuess={handleGuess} message={message} calculateProgress={calculateProgress}/>
  );
}

export default NumberGuessingGame;
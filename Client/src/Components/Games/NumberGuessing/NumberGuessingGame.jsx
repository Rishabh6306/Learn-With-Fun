import React, { useState } from "react";
import NumberGussingGameUI from "./NumberGussingGameUI";

function NumberGuessingGame() {
  // State variables
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [message, setMessage] = useState("");

  // Function to generate a random target number between 1 and 100
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Function to calculate the progress based on the current guess
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

  // Function to handle a guess
  function handleGuess() {
    const guess = parseInt(currentGuess);

    if (isNaN(guess)) {
      setMessage("Please enter a valid number.");
    } else {
      const newGuesses = [...guesses, guess];
      setGuesses(newGuesses);

      if (guess === targetNumber) {
        setMessage("Congratulations! You guessed the correct number.");

        // Reset the game after a delay
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

  // Function to handle key press (Enter key) for submitting a guess
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleGuess();
    }
  }

  // Function to go back to the previous page
  function goBack() {
    window.history.back();
  }

  // Render the NumberGussingGameUI component with props
  return (
    <NumberGussingGameUI
      goBack={goBack}
      currentGuess={currentGuess}
      handleKeyPress={handleKeyPress}
      setCurrentGuess={setCurrentGuess}
      guesses={guesses}
      handleGuess={handleGuess}
      message={message}
      calculateProgress={calculateProgress}
    />
  );
}

export default NumberGuessingGame;
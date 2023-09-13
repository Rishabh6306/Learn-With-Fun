import React, { useState, useEffect } from 'react';
import { GiFastBackwardButton } from 'react-icons/gi'

const initialText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam esse beatae, accusamus hic similique mollitia iure. Quidem aspernatur minima et aliquam blanditiis dolor, ducimus, doloribus quam adipisci magni voluptate impedit nesciunt consectetur unde nisi exercitationem eius quae veritatis alias illo voluptatem? Accusamus recusandae in est, eum eligendi voluptatibus ad animi';

function TypingGame() {
  const [text, setText] = useState(initialText);
  const [typedText, setTypedText] = useState('');
  const [mistakes, setMistakes] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [currentWpm, setCurrentWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100); // Initially set to 100%

  const validKeysRegex = /^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/;
  const invalidKeys = new Set([
    'Backspace',
    'Tab',
    'Shift',
    // ... (other invalid keys)
  ]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      const keyPressed = e.key;
      const currentChar = text[typedText.length];

      if (isValidKey(keyPressed) && validKeysRegex.test(keyPressed)) {
        if (keyPressed === currentChar) {
          setTypedText((prevTypedText) => prevTypedText + currentChar);
        } else {
          setMistakes((prevMistakes) => prevMistakes + 1);
        }
      }

      // Start the timer on the first keypress
      if (startTime === null) {
        setStartTime(Date.now());
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [text, typedText, startTime]);

  useEffect(() => {
    // Calculate and update the current WPM every second
    const wpmInterval = setInterval(() => {
      if (startTime !== null) {
        const elapsedTimeInMinutes = (Date.now() - startTime) / (1000 * 60);
        const wordsTyped = typedText.split(/\s+/).length;
        const newWpm = Math.round(wordsTyped / elapsedTimeInMinutes);
        setCurrentWpm(newWpm);
      }
    }, 1000);

    return () => {
      clearInterval(wpmInterval);
    };
  }, [startTime, typedText]);

  useEffect(() => {
    let timerInterval;

    if (startTime !== null && timeLeft > 0) {
      timerInterval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }

    // When the timer reaches 0, calculate final results and stop the timer
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      setEndTime(Date.now());
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [startTime, endTime, timeLeft, typedText]);

  useEffect(() => {
    // Calculate accuracy (excluding mistakes)
    const totalCharsTyped = typedText.length - mistakes;
    const newAccuracy =
      isNaN(totalCharsTyped) || totalCharsTyped === 0
        ? 0
        : Math.max(Math.round((totalCharsTyped / typedText.length) * 100), 0);
    setAccuracy(newAccuracy);
  }, [typedText, mistakes]);

  const isValidKey = (key) => !invalidKeys.has(key);

  const resetGame = () => {
    setText(initialText);
    setTypedText('');
    setMistakes(0);
    setStartTime(null);
    setEndTime(null);
    setTimeLeft(180);
    setCurrentWpm(0);
    setAccuracy(100); // Reset accuracy
  };

  
  function goBack() {
    window.history.back(); // This line takes the user back to the previous page
  }

  const renderTextWithHighlights = () => {
    const textChars = text.split('');

    return textChars.map((char, charIndex) => {
      const isTypedCorrectly = char === (typedText[charIndex] || '');

      let style = {};
      if (isTypedCorrectly) {
        style = { color: 'green' };
      } else if (charIndex < typedText.length) {
        style = { color: 'red' };
      } else {
        style = { color: 'gray' };
      }

      return (
        <span key={charIndex} style={style}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className='bg-[url(./src/Components/Games/SpeedTyping/TypingBgc.jpg)] bg-center bg-cover h-screen flex items-center justify-center'>
      <div className='bg-black text-white rounded-xl sm:w-11/12 md:w-9/12 lg:w-1/2 h-5/6 ssm:h-auto ssm:mx-5'>
       <div className='flex items-center justify-between mx-3'>
       <button onClick={goBack} className="bg-blue-800 text-white px-4 py-2 m-3 rounded-md"><GiFastBackwardButton /></button>
       <h1 className='text-white text-3xl ssm:mr-10 sm:mr-40 lg:mr-52'>Typing Game</h1>
       </div>
        <div className='border-blue-700 border-2 m-2 ssm:m-7 p-2 ssm:p-5 rounded-2xl'>
          <div className='text-gray-400 sm:text-xl tracking-wide mb-3'>
            {renderTextWithHighlights()}
          </div>
          <div className='border-t-2 border-blue-700 mt-1 sm:mt-6 flex justify-around pt-6 flex-wrap'>
            <span>
              <strong>Time Left:</strong> {Math.floor(timeLeft / 60)}:
              {String(Math.floor(timeLeft % 60)).padStart(2, '0')}
            </span>
            <span>
              <strong>Mistakes:</strong> {mistakes}
            </span>
            <span>
              <strong>Current WPM:</strong> {currentWpm}
            </span>
            <span>
              <strong>Accuracy:</strong> {accuracy}%
            </span>
            <span>
              <button
                className='bg-blue-800 py-2 rounded-3xl px-8 mt-2 md:mt-0'
                onClick={resetGame}
              >
                Try Again
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypingGame;
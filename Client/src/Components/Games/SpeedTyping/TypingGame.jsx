import React, { useState, useEffect, useRef } from 'react';
import { GiFastBackwardButton } from 'react-icons/gi'
import music from "./WrongType.mp3"

const possibleParagraphs = [
  "India is a vast country with a rich history and culture. It is the second-most populous country in the world, with over 1.3 billion people. India is home to many different religions, languages, and cultures. The official language of India is Hindi, but there are over 200 other languages spoken in the country. India is a land of contrasts. It is home to the world's highest mountains, the Himalayas, and the world's second-largest river system, the Ganges.  ",
  'Alice was a curious girl who loved to explore. One day, she was walking in the woods when she came across a strange plant. She was drawn to the plant and started to touch it. As she did, she felt a strange tingling sensation and the symbols on the plant started to glow. Alice was amazed and closed her eyes. When she opened them, she was in a strange and beautiful world. She had been transported to another dimension by the strange plant.',
  "Aman and Arjun were two young boys who loved to code. They would spend hours every day learning new technologies and building websites. They were both very passionate about their work, and they dreamed of one day becoming professional web developers. One day, Aman and Arjun decided to enter a coding competition. They worked hard on their project, and they were confident that they would win. On the day of the competition, they were nervous, but they gave it their best shot. In the end, Aman and Arjun won the competition! They were so excited, and they knew that this was just the beginning of their journey as web developers. They continued to work hard, and they eventually got their dream jobs as professional web developers.",
  `Vikramaditya was a wise king who ruled over a vast empire in ancient India. He was known for his intelligence, his justice, and his generosity. One day, a wise man came to Vikramaditya's court. He told the king that he had a riddle that only the wisest person in the world could answer. He agreed to let the wise man ask him a riddle. The wise man said, "What is something that is always with you, but you can never see it?" Vikramaditya thought for a moment. Then he answered, "The answer is your shadow." The wise man was impressed. He said, "You are indeed a wise king." Vikramaditya was known for his wisdom and his justice.`,
];

function getRandomParagraph() {
  const randomIndex = Math.floor(Math.random() * possibleParagraphs.length);
  return possibleParagraphs[randomIndex];
}

function TypingGame() {
  const [text, setText] = useState(getRandomParagraph());
  const [typedText, setTypedText] = useState('');
  const [mistakes, setMistakes] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [currentWpm, setCurrentWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100); // Initially set to 100%
  const [playMistakeSound, setPlayMistakeSound] = useState(false);


  const validKeysRegex = /^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/;
  const invalidKeys = new Set([
    'Backspace', 'Tab', 'Shift', 'Control', 'NumLock', "MediaPlayPause", "MediaTrackPrevious", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "Meta", "Unidentified", 'Alt', 'CapsLock', 'Escape', 'Home', 'End', 'PageUp', 'PageDown', 'Delete', 'Insert', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
  ]);


  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(music);
    }
  }, []);


  useEffect(() => {
    const handleKeyPress = (e) => {
      const keyPressed = e.key;
      const currentChar = text[typedText.length];

      if (isValidKey(keyPressed) && validKeysRegex.test(keyPressed)) {
        if (keyPressed === currentChar) {
          setTypedText((prevTypedText) => prevTypedText + currentChar);
        } else {
          setMistakes((prevMistakes) => prevMistakes + 1);
          const audio = audioRef.current;
          if (audio) {
            audio.currentTime = 0;
            audio.play();
          }
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
    setText(getRandomParagraph());
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
    <div className='bg-[url(./src/Components/Games/SpeedTyping/TypingBgc.jpg)] bg-center bg-cover h-[130vh] md:h-screen flex pt-4 sm:pt-0 sm:items-center justify-center'>
      <div className='bg-black text-white rounded-xl sm:w-11/12 md:w-9/12 h-[92%] ssm:h-auto ssm:mx-5'>
        <div className='flex items-center justify-between mx-3'>
          <button onClick={goBack} className="bg-blue-800 text-white px-4 py-2 m-3 rounded-md"><GiFastBackwardButton /></button>
          <h1 className='text-white text-3xl ssm:mr-10 sm:mr-40 lg:mr-52'>Typing Game</h1>
        </div>

        <div className='border-blue-700 border-2 m-2 ssm:m-5 p-2 ssm:p-4 rounded-2xl'>
          <div className='border-b-2 border-blue-700 mb-1 sm:mb-6 flex justify-around py-4 flex-wrap'>
            <span>
              <strong>Time Left:</strong> {Math.floor(timeLeft / 60)}:
              {String(Math.floor(timeLeft % 60)).padStart(2, '0')}
            </span>
            <span>
              <strong>Mistakes:</strong> {mistakes}
            </span>
            <span>
              <strong>WPM:</strong> {currentWpm}
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

          <div className='text-gray-400 text-[15px] sm:text-xl tracking-wide mb-3'>
            {renderTextWithHighlights()}
          </div>
          {/* Add an <audio> element to play the mistake sound */}
          <audio src={music} autoPlay={playMistakeSound} onEnded={() => setPlayMistakeSound(false)} />
        </div>
      </div>
    </div>
  );
}

export default TypingGame;
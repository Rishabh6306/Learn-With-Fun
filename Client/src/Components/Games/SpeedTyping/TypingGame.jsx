import React, { useState, useEffect, useRef } from 'react';
import music from "./WrongType.mp3"
import TypingGmeUI from './TypingGmeUI';

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
  const [hasPlayedMistakeSound, setHasPlayedMistakeSound] = useState(false); // New state


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
        setHasPlayedMistakeSound(false);
        if (keyPressed === currentChar) {
          setTypedText((prevTypedText) => prevTypedText + currentChar);
          setHasPlayedMistakeSound(false);
        } else {
          if (!hasPlayedMistakeSound) {
            const audio = audioRef.current;
            if (audio) {
              audio.currentTime = 0;
              audio.play();
            }
            setHasPlayedMistakeSound(true); // Mark that the sound has been played
          }
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
  }, [text, typedText, startTime, hasPlayedMistakeSound]); // Added dependencies here


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
  }, [startTime, typedText]); // Added dependencies here

  useEffect(() => {
    let timerInterval;

    if (startTime !== null && timeLeft > 0) {
      timerInterval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }

    // When the timer reaches 0, calculate final results and stop the timer
    if (timeLeft === 0 && endTime === null) {
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
  }, [typedText, mistakes]); // Added dependencies here

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
    setHasPlayedMistakeSound(false); // Reset the mistake sound flag
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
    <TypingGmeUI goBack={goBack} timeLeft={timeLeft} mistakes={mistakes} currentWpm={currentWpm} accuracy={accuracy} resetGame={resetGame} renderTextWithHighlights={renderTextWithHighlights} music={music} playMistakeSound={playMistakeSound} setPlayMistakeSound={setPlayMistakeSound} />
  );
}

export default TypingGame;
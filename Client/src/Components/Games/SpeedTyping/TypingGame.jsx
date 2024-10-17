import React, { useState, useEffect, useRef } from 'react';
import music from "./WrongType.mp3"
import TypingGmeUI from './TypingGmeUI';
import GameResultPopup from './GameResultPopup'

const possibleParagraphs = [
  "In recent years, the importance of mental health has gained significant recognition in society. People are increasingly aware of the need to prioritize their mental well-being just as they would their physical health. This shift has led to a greater openness about discussing mental health issues, breaking the stigma that often surrounds them. Various strategies, such as mindfulness, therapy, and support groups, have emerged to help individuals cope with stress, anxiety, and depression. As more people seek help and share their experiences, society moves toward a more supportive and understanding environment for those struggling with mental health challenges.",
  "The advancement of technology has drastically changed the landscape of education. Online learning platforms have emerged, making education more accessible than ever before. Students from various backgrounds can now attend classes virtually, breaking geographical barriers that once limited their opportunities. However, this shift also comes with challenges, such as the need for self-discipline and the potential for distractions in a home environment. Teachers have had to adapt their methods to engage students in a virtual setting, employing tools like interactive quizzes and video discussions to maintain interest. Despite these challenges, online education has opened doors for countless individuals, offering flexibility and a chance to learn at their own pace.",
  "Traveling is one of the most enriching experiences a person can undertake. It offers the opportunity to explore new cultures, meet diverse people, and gain a broader perspective on life. From wandering through the bustling markets of Marrakech to relaxing on the serene beaches of Bali, each destination has its unique charm and allure. Travel not only allows individuals to escape their daily routines but also fosters personal growth. Navigating foreign cities, trying new cuisines, and overcoming language barriers can boost confidence and adaptability. However, responsible travel is crucial. Tourists should be mindful of their impact on local communities and the environment, ensuring that their adventures leave a positive legacy.",
  "The significance of environmental conservation cannot be overstated, especially in today's rapidly changing world. As climate change poses a significant threat to our planet, collective action is essential to preserve our ecosystems. Individuals, communities, and governments must work together to reduce carbon emissions, promote sustainable practices, and protect endangered species. Grassroots movements have gained momentum, with people advocating for policy changes that prioritize the environment. Simple actions, such as reducing plastic use, conserving water, and supporting local businesses, can contribute to a larger movement for sustainability. By making conscious choices, everyone can play a role in safeguarding the planet for future generations.",
  "Food is more than just sustenance; it is a cultural expression and a means of connection among people. Each region of the world boasts its unique culinary traditions that reflect its history, climate, and available resources. For example, Italian cuisine is renowned for its use of fresh ingredients and bold flavors, while Japanese cuisine emphasizes simplicity and seasonal elements. Food brings people together, whether through family gatherings, community festivals, or dining in restaurants. Moreover, the rise of food tourism has allowed travelers to experience local cuisines in authentic settings, creating lasting memories and fostering appreciation for diverse cultures. Understanding and embracing the culinary arts is essential in a world that celebrates diversity and interconnectedness.",
  "The rise of social media has transformed the way we communicate, interact, and perceive the world around us. With platforms like Facebook, Twitter, Instagram, and TikTok, individuals can share their thoughts, experiences, and creativity with a global audience. While social media has made it easier to connect with others and build communities, it has also raised concerns about privacy, mental health, and misinformation. Many people find themselves navigating the challenges of maintaining a positive online presence while dealing with the pressure to conform to societal standards. As we continue to adapt to this digital landscape, it is crucial to find a balance between leveraging the benefits of social media and protecting our well-being.",
  "The exploration of space has captivated human imagination for centuries. The quest to understand the universe and our place within it has driven advancements in science and technology. From the early days of astronomy to the groundbreaking Apollo missions, humanity's journey into space has been marked by awe-inspiring achievements and significant discoveries. Today, private companies are joining government space agencies in the race to explore Mars, establish lunar bases, and develop space tourism. As we venture further into the cosmos, ethical questions about the implications of colonizing other planets and the responsibility we hold for preserving our own planet's resources arise.",
  "The world of literature offers a profound insight into the human experience. Through stories, poetry, and essays, writers convey emotions, ideas, and perspectives that resonate with readers across generations. Literature has the power to transport us to different times and places, helping us empathize with characters and situations that may be far removed from our own lives. From the classics of Shakespeare and Jane Austen to contemporary authors like Chimamanda Ngozi Adichie and Haruki Murakami, literature continues to evolve, reflecting societal changes and cultural shifts. Engaging with literature enriches our understanding of the world and ourselves, making it an essential aspect of education and personal growth.",
  "Sports have always played a significant role in society, serving as a source of entertainment, competition, and community engagement. From football to basketball, cricket to tennis, sports bring people together, fostering a sense of camaraderie and pride. Major sporting events, such as the Olympics and the FIFA World Cup, showcase not only athletic prowess but also cultural exchange and international cooperation. However, sports also face challenges, including issues of inequality, doping, and the commercialization of athletes. As we celebrate athletic achievements, it is important to address these challenges and work towards creating a more inclusive and fair sporting environment for all."
];


function getRandomParagraph() {
  // Function to get a random paragraph from the possibleParagraphs array.
  const randomIndex = Math.floor(Math.random() * possibleParagraphs.length);
  return possibleParagraphs[randomIndex];
}

function TypingGame() {
  const [text, setText] = useState(getRandomParagraph());
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false); // State for showing the pop-up
  const [lastWpm, setLastWpm] = useState(0); // 
  const [typedText, setTypedText] = useState('');
  const [mistakes, setMistakes] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60); // 1 minutes in seconds
  const [currentWpm, setCurrentWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100); // Initially set to 100%
  const [playMistakeSound, setPlayMistakeSound] = useState(false);
  const [hasPlayedMistakeSound, setHasPlayedMistakeSound] = useState(false);


  const validKeysRegex = /^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/;
  const invalidKeys = new Set([
    // An array of invalid keys that won't be considered for typing.
    'Backspace', 'Tab', 'Shift', 'Control', 'NumLock', "MediaPlayPause", "MediaTrackPrevious", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "Meta", "Unidentified", 'Alt', 'CapsLock', 'Escape', 'Home', 'End', 'PageUp', 'PageDown', 'Delete', 'Insert', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
  ]);

  const audioRef = useRef(null);

  useEffect(() => {
    // Detect if the user is on a mobile or tablet device
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setIsMobileOrTablet(true); // Mobile or tablet detected
      }
    };

    checkDevice(); // Run on load
    window.addEventListener('resize', checkDevice); // Run on resize

    return () => {
      window.removeEventListener('resize', checkDevice); // Clean up listener
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(music);
    }
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Function to handle keypress events.
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
            setHasPlayedMistakeSound(true);
          }
          setMistakes((prevMistakes) => prevMistakes + 1);
        }
      }

      if (startTime === null) {
        setStartTime(Date.now());
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [text, typedText, startTime, hasPlayedMistakeSound]);

  useEffect(() => {
    const wpmInterval = setInterval(() => {
      // Calculate and update the current WPM every second.
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

    if (timeLeft === 0 && endTime === null) {
      clearInterval(timerInterval);
      setLastWpm(currentWpm); // Set the last WPM before showing the pop-up
      setShowResultPopup(true); // Show the result pop-up when the time is up
      setEndTime(Date.now());
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [startTime, endTime, timeLeft, typedText, currentWpm]);

  useEffect(() => {
    const totalCharsTyped = typedText.length - mistakes;
    const newAccuracy =
      isNaN(totalCharsTyped) || totalCharsTyped === 0
        ? 0
        : Math.max(Math.round((totalCharsTyped / typedText.length) * 100), 0);
    setAccuracy(newAccuracy);
  }, [typedText, mistakes]);

  const isValidKey = (key) => !invalidKeys.has(key);

  const resetGame = () => {
    // Reset the game to its initial state.
    setText(getRandomParagraph());
    setTypedText('');
    setMistakes(0);
    setStartTime(null);
    setEndTime(null);
    setTimeLeft(60);
    setCurrentWpm(0);
    setLastWpm(0); 
    setAccuracy(100);
    setHasPlayedMistakeSound(false);
    setShowResultPopup(false);
  };

  function goBack() {
    window.history.back(); // This line takes the user back to the previous page
  }

  const renderTextWithHighlights = () => {
    // Function to render the text with highlighted characters.
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


  if (isMobileOrTablet) {
    // Render Popup if on mobile or tablet
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4 text-red-600">Unsupported Device</h2>
          <p className="mb-6 text-gray-700">
            Please use a laptop or desktop for the best experience!
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

    // Format the time taken
    const formatTimeTaken = () => {
      const totalTime = 60 - timeLeft; // Total time taken in seconds
      const minutes = Math.floor(totalTime / 60);
      const seconds = totalTime % 60;
      return { minutes, seconds };
  };

  // Render Typing Game UI if on desktop/laptop
  return (
    <>
      <TypingGmeUI
        goBack={goBack}
        timeLeft={timeLeft}
        mistakes={mistakes}
        currentWpm={currentWpm}
        accuracy={accuracy}
        resetGame={resetGame}
        renderTextWithHighlights={renderTextWithHighlights}
        music={music}
        playMistakeSound={playMistakeSound}
        setPlayMistakeSound={setPlayMistakeSound}
      />
      {showResultPopup && (
        <GameResultPopup
                    timeLeft={formatTimeTaken()}
          mistakes={mistakes}
          currentWpm={lastWpm} 
          accuracy={accuracy}
          resetGame={resetGame}
          goBack={goBack}
        />
      )}
    </>
  );
}

export default TypingGame;
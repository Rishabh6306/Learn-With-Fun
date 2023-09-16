import React, { useState, useEffect } from 'react';
import QuizSelection from './QuizSelection';
import { htmlquestions, cssquestions, javaScriptquestions } from './Questions/HtmlQuestions';

function QuizUI() {
  const [questions, setQuestions] = useState(htmlquestions);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(120);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [isOptionSelectedForQuestion, setIsOptionSelectedForQuestion] = useState(
    Array(htmlquestions.length).fill(null) // Use null to represent no selection
  );

  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(interval);
        setIsQuizOver(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const handleOptionSelect = (selectedOption) => {
    const updatedFlags = [...isOptionSelectedForQuestion];
    updatedFlags[currentQuestionIndex] = selectedOption;
    setIsOptionSelectedForQuestion(updatedFlags);
  };

  const handleSectionClick = (section) => {
    switch (section) {
      case 'HTML':
        setQuestions(htmlquestions);
        break;
      case 'CSS':
        setQuestions(cssquestions);
        break;
      case 'JavaScript':
        setQuestions(javaScriptquestions);
        break;
      default:
        setQuestions([]);
        break;
    }
    setIsQuizOver(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimer(120);
    setShowCorrectAnswers(false); // Reset showing correct answers
    const resetFlags = Array(questions.length).fill(null); // Use null to represent no selection
    setIsOptionSelectedForQuestion(resetFlags);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      localStorage.setItem('quizScore', score);
      setIsQuizOver(true);
    }
  };


  const handleRestartQuiz = () => {
    setIsQuizOver(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimer(120);
    setShowCorrectAnswers(false); // Reset showing correct answers
    const clearedQuestions = questions.map((q) => ({
      ...q,
      selectedAnswer: null,
    }));
    setQuestions(clearedQuestions);
    const resetFlags = Array(questions.length).fill(null); // Use null to represent no selection
    setIsOptionSelectedForQuestion(resetFlags);
  };

  useEffect(() => {
    if (isQuizOver) {
      localStorage.setItem('quizScore', score);
    }
  }, [isQuizOver, score]);

  return (
    <>
      <QuizSelection handleSectionClick={handleSectionClick} />
      <div className='bg-[url(./src/Components/Quiz/assests/bgc-5.jpg)] h-[74vh] bg-center bg-cover flex flex-col items-center justify-center'>
        {isQuizOver ? (
          <div className='border-2 rounded-xl text-center text-4xl p-5 w-7/12'>
            <h1>Your Score: {score}</h1>
            <button
              className='bg-blue-700 my-4 text-white text-2xl rounded-2xl p-4'
              onClick={handleRestartQuiz}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div className='border-2 rounded-xl p-5 w-7/12'>
            <p className='bg-[#3a1df435] mb-3 rounded-lg text-white py-4 text-center'>
              Timer: {Math.floor(timer / 60)}:{timer % 60}
            </p>
            <div>
              <p className='text-3xl font-semibold '>
                {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
              </p>
              <ul>
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                    className={`${
                      showCorrectAnswers
                        ? option === questions[currentQuestionIndex].correctAnswer
                          ? 'bg-green-500'
                          : isOptionSelectedForQuestion[currentQuestionIndex] === option
                          ? 'bg-red-500'
                          : ''
                        : isOptionSelectedForQuestion[currentQuestionIndex] === option
                        ? 'bg-purple-500'
                        : ''
                    } cursor-pointer p-2 m-2`}
                  >
                    {option}
                  </li>
                ))}
              </ul>
              <button
                className='bg-blue-700 duration-500 float-right text-white rounded-2xl p-4'
                onClick={handleNextQuestion}
                disabled={!isOptionSelectedForQuestion[currentQuestionIndex]}
              >
                Next Question
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default QuizUI;
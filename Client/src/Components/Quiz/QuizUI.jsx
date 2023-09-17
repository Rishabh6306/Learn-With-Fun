import React from 'react';
import QuizSelection from './QuizSelection';

function QuizUI({ handleNextQuestion, handleOptionSelect, handleRestartQuiz, handleSectionClick, hasPassed, score, timer, questions, currentQuestionIndex, isOptionSelectedForQuestion, showCorrectAnswers, indexToLetter, isQuizOver }) {
  return (
    <>
      {/* Render the QuizSelection component */}
      <QuizSelection handleSectionClick={handleSectionClick} />
      <div className='bg-[url(./src/Components/Quiz/assests/bgc-5.jpg)] h-auto py-6 bg-center bg-cover flex flex-col items-center justify-center'>
        {isQuizOver ? (
          /* Display quiz result if the quiz is over */
          <div className={`border-2 rounded-xl text-center text-4xl p-5 w-full sm:w-7/12 ${hasPassed ? 'text-[#3dd53d]' : 'text-red-500'}`}>
            <p>{hasPassed ? 'Congratulations you Passed the Quiz' : 'Failed'}</p>
            <h1 className='text-violet-200 mr-6'>Your Score: {score}</h1>
            <p className='text-[#801a00]'>Correct: {score / 2} out of {questions.length}</p>
            <button
              className='bg-blue-700 my-4 text-white text-2xl rounded-2xl p-4'
              onClick={handleRestartQuiz}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          /* Display the quiz questions and options if the quiz is ongoing */
          <div className='border-2 rounded-xl p-2 sm:p-5 w-11/12 md:w-7/12'>
            <p className='bg-[#3a1df435] mb-3 rounded-lg text-white py-4 text-center'>
              Timer: {Math.floor(timer / 60)}:{timer % 60}
            </p>
            <div>
              <p className='text-2xl sm:text-3xl font-semibold '>
                {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
              </p>
              <ol>
                {questions[currentQuestionIndex].options.map((option, index) => (
                  /* Render each quiz option with styling based on user interaction */
                  <li
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                    className={`break-words ${showCorrectAnswers
                      ? option === questions[currentQuestionIndex].correctAnswer
                        ? 'bg-green-500'
                        : isOptionSelectedForQuestion[currentQuestionIndex] === option
                          ? 'bg-red-500'
                          : ''
                      : isOptionSelectedForQuestion[currentQuestionIndex] === option
                        ? 'bg-purple-500'
                        : ''
                      } cursor-pointer p-2 sm:m-2 duration-500`}
                  >
                    {indexToLetter(index)}. {option}
                  </li>
                ))}
              </ol>
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
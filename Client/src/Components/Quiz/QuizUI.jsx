import React, { useState, useEffect } from 'react';
import { useTimer, QuizSelection } from './QuizUtils';

function QuizUI() {
  const {
    time,
    getQuestionsForSelectedQuiz,
    initialTimeInSeconds,
    selectedQuiz,
    selectQuiz,
    score,
    setScore,
  } = QuizSelection();
  const { time: timerTime, formatTime, resetTimer } = useTimer(initialTimeInSeconds);

  const questions = getQuestionsForSelectedQuiz();
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));

  useEffect(() => {
    // Reset the timer when the quiz selection changes
    resetTimer();
  }, [selectedQuiz, resetTimer]);
  
  useEffect(() => {
    // Reset the score when questions change
    setScore(0);
  }, [questions]);
  
  useEffect(() => {
    // Reset selected answers when questions change
    setSelectedAnswers(Array(questions.length).fill(null));
  }, [questions]);
  

  const handleOptionSelect = (questionIndex, optionIndex, selectedOption) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmitQuiz = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  return (
    <div className='bg-violet-200'>
      <div className='bg-[#a593fe] px-3 ssm:px-9 py-3 md:py-6 flex-wrap flex gap-3 md:gap-5 text-[1rem] md:text-2xl'>
        <div>
          <label htmlFor='quiz-select'>Select Quiz:</label>
          <select
            className='rounded-sm mx-5 outline-none'
            id='quiz-select'
            onChange={(e) => selectQuiz(e.target.value)}
            value={selectedQuiz}
          >
            <option value='HTML'>HTML</option>
            <option value='CSS'>CSS</option>
            {/* Add options for other quizzes as needed */}
          </select>
        </div>

        <label>Score: <strong>{score}</strong></label>
        <h1 className='text-gray-100 font-bold tracking-widest mx-3 text-3xl sm:text-5xl'>Quiz App</h1>

        <span>Time: {formatTime(timerTime)}</span>
      </div>

      <div className='flex flex-wrap justify-center gap-2 md:gap-4 bg-violet-200 sm:p-5 pb-12'>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className='m-3 ssm:m-7 md:ml-2'>
            <p className='my-3 leading-8 tracking-wider font-medium text-xl md:text-2xl'>{questionIndex + 1}. {question.question}</p>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className='ssm:text-[1rem]'>
                <input
                  className='m-3 ml-0 sm:mr-5'
                  type='radio'
                  id={`q${questionIndex + 1}_option${optionIndex + 1}`}
                  name={`q${questionIndex + 1}Options`}
                  value={option}
                  checked={selectedAnswers[questionIndex] === option}
                  onChange={() => handleOptionSelect(questionIndex, optionIndex, option)}
                />
                <label htmlFor={`q${questionIndex + 1}_option${optionIndex + 1}`}>{option}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className='text-center bg-indigo-600 text-stone-100 py-2 px-8 mx-20 my-5 rounded-xl' onClick={handleSubmitQuiz}>Submit</button>
    </div>
  );
}

export default QuizUI;
import React, { useEffect } from 'react';
import { useTimer, QuizSelection } from './QuizUtils';

function QuizUI() {
  const { time, getQuestionsForSelectedQuiz, initialTimeInSeconds, selectedQuiz, selectQuiz, score, setScore } = QuizSelection();
  const { time: timerTime, formatTime } = useTimer(initialTimeInSeconds);

  const questions = getQuestionsForSelectedQuiz();

  useEffect(() => {
    // Reset the timer when the quiz selection changes
    setScore(0); // Reset the score
  }, [selectedQuiz]);

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
            <option value='JavaScript'>JavaScript</option>
            <option value='ReactJS'>ReactJS</option>
            <option value='Python'>Python</option>
          </select>
        </div>

        <label>Score: <strong>{score}</strong></label>
        <h1 className='text-gray-100 font-bold tracking-widest mx-3 text-3xl sm:text-5xl'>Quiz App</h1>

        <span>Time: {formatTime(timerTime)}</span>
      </div>

      <div className='flex flex-wrap justify-center gap-2 md:gap-4 bg-violet-200 sm:p-5 pb-12'>
        {questions.map((Question, index) => (
          <div key={index} className='m-3 ssm:m-7 md:ml-2'>
            <p className='my-3 leading-8 tracking-wider font-medium text-xl md:text-2xl'>{index + 1}. {Question.question}</p>
            {Question.options.map((option, optionIndex) => (
              <div key={optionIndex} className='ssm:text-[1rem]'>
                <input className='m-3 ml-0 sm:mr-5' type='radio' id={`q${index + 1}_option${optionIndex + 1}`} name={`q${index + 1}Options`} value={option} />
                <label htmlFor={`q${index + 1}_option${optionIndex + 1}`}>{option}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
     <input className='text-center bg-indigo-600 text-stone-100 py-2 px-8 mx-20 my-5 rounded-xl' type="button" value="button" />
    </div>
  );
}

export default QuizUI; 
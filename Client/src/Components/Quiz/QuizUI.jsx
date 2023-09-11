import React from 'react';

const questions = [
  {
    question: 'What is the full form of HTML?',
    options: [
      'Hyper Text Markup Language',
      'Hyperlink and Text Markup Language',
      'Highly Textual Markup Language',
      'Hyper Transfer Markup Language',
    ],
    correctAnswer: 'Hyper Text Markup Language',
  },
  {
    question: 'What does CSS stand for?',
    options: [
      'Cascading Style Sheet',
      'Computer Style Sheet',
      'Creative Style System',
      'Colorful Style Sheet',
    ],
    correctAnswer: 'Cascading Style Sheet',
  },
  {
    question: 'What is the full form of HTML?',
    options: [
      'Hyper Text Markup Language',
      'Hyperlink and Text Markup Language',
      'Highly Textual Markup Language',
      'Hyper Transfer Markup Language',
    ],
    correctAnswer: 'Hyper Text Markup Language',
  },
  {
    question: 'What does CSS stand for?',
    options: [
      'Cascading Style Sheet',
      'Computer Style Sheet',
      'Creative Style System',
      'Colorful Style Sheet',
    ],
    correctAnswer: 'Cascading Style Sheet',
  },
  {
    question: 'What is the full form of HTML?',
    options: [
      'Hyper Text Markup Language',
      'Hyperlink and Text Markup Language',
      'Highly Textual Markup Language',
      'Hyper Transfer Markup Language',
    ],
    correctAnswer: 'Hyper Text Markup Language',
  },
  {
    question: 'What does CSS stand for?',
    options: [
      'Cascading Style Sheet',
      'Computer Style Sheet',
      'Creative Style System',
      'Colorful Style Sheet',
    ],
    correctAnswer: 'Cascading Style Sheet',
  },
];

function QuizUI() {

  return (
    <>
      <div className='bg-[#a593fe] px-3 ssm:px-10 py-3 md:py-8 flex-wrap flex gap-4 md:gap-12 text-xl md:text-2xl border-b-[2px]'>
        <div>
          <label htmlFor='quix-select'>Select Quiz:</label>
          <select className='rounded-sm mx-3' id='quiz-select'>
            <option>HTML</option>
            <option>CSS</option>
            <option>JavaScript</option>
            <option>ReactJS</option>
            <option>Python</option>
          </select>
        </div>

        <label>Score: <strong>2</strong></label>
        <h1 className='text-gray-100 font-bold tracking-widest mx-3 text-3xl sm:text-5xl'>Quiz App</h1>
      </div>


      <div className="flex flex-wrap gap-2 md:gap-5 bg-violet-200 pb-12">
        {questions.map((Question, index) => (
          <div key={index} className="m-3 ssm:m-7 md:ml-20">
            <p className='my-3 leading-8 tracking-wider text-xl'>{index + 1}. {Question.question}</p>
            {Question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input className='m-3 ml-1 sm:mx-5' type="radio" id={`q${index + 1}_option${optionIndex + 1}`} name={`q${index + 1}Options`} value={option} />
                <label htmlFor={`q${index + 1}_option${optionIndex + 1}`}>{option}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default QuizUI;
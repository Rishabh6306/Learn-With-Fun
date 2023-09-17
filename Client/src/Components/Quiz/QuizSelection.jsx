import React from 'react';

function QuizSelection({ handleSectionClick }) {
  return (
    <div>
      <ul className='bg-cyan-500 px-4 sm:px-0 py-4 overflow-x-auto flex items-center sm:justify-center gap-3 ssm:gap-5'>
        <li
          className='hover:border-dotted hover:border-b-2 border-red-400'
          onClick={() => handleSectionClick('HTML')} // Pass 'HTML' as the section name
        >
          HTML
        </li>
        <li
          className='hover:border-dotted hover:border-b-2 border-red-400'
          onClick={() => handleSectionClick('CSS')} // Pass 'CSS' as the section name
        >
          CSS
        </li>
        <li
          className='hover:border-dotted hover:border-b-2 border-red-400'
          onClick={() => handleSectionClick('JavaScript')} // Pass 'JavaScript' as the section name
        >
          JavaScript
        </li>
        <li
          className='hover:border-dotted hover:border-b-2 border-red-400'
          onClick={() => handleSectionClick('ReactJS')} // Pass 'ReactJS' as the section name
        >
          ReactJS
        </li>
        <li
          className='hover:border-dotted hover:border-b-2 border-red-400'
          onClick={() => handleSectionClick('Python')} // Pass 'Python' as the section name
        >
          Python
        </li>
      </ul>
    </div>
  );
}

export default QuizSelection;
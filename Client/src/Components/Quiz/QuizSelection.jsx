// QuizSelection.js
import React from 'react';

function QuizSelection({ handleSectionClick }) {
  return (
    <ul className='bg-green-300 w-full py-4  flex items-center justify-center gap-5'>
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
  );
}

export default QuizSelection;
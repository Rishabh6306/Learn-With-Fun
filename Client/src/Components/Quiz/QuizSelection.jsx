import React, { useState } from 'react';

function QuizSelection({ handleSectionClick }) {
  const [activeSection, setActiveSection] = useState(null);

  const handleItemClick = (sectionName) => {
    handleSectionClick(sectionName);
    setActiveSection(sectionName);
  };

  return (
    <div>
      <ul className='bg-cyan-500 px-4 sm:px-0 py-4 overflow-x-auto flex items-center sm:justify-center gap-3 ssm:gap-5'>
        <li
          className={`hover:border-dotted hover:border-b-2 ${activeSection === 'HTML' ? 'text-red-500' : 'border-red-400'}`}
          onClick={() => handleItemClick('HTML')}
        >
          HTML
        </li>
        <li
          className={`hover:border-dotted hover:border-b-2 ${activeSection === 'CSS' ? 'text-red-500' : 'border-red-400'}`}
          onClick={() => handleItemClick('CSS')}
        >
          CSS
        </li>
        <li
          className={`hover:border-dotted hover:border-b-2 ${activeSection === 'JavaScript' ? 'text-red-500' : 'border-red-400'}`}
          onClick={() => handleItemClick('JavaScript')}
        >
          JavaScript
        </li>
        <li
          className={`hover:border-dotted hover:border-b-2 ${activeSection === 'ReactJS' ? 'text-red-500' : 'border-red-400'}`}
          onClick={() => handleItemClick('ReactJS')}
        >
          ReactJS
        </li>
        <li
          className={`hover:border-dotted hover:border-b-2 ${activeSection === 'Python' ? 'text-red-500' : 'border-red-400'}`}
          onClick={() => handleItemClick('Python')}
        >
          Python
        </li>
      </ul>
    </div>
  );
}

export default QuizSelection;

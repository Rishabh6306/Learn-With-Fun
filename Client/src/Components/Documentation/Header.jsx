import React from 'react';

function Header({ headings, activeHeading, handleHeadingClick }) {
  return (
    <ul className='w-2/6'>
      {headings.map((heading) => (
        <li
          key={heading}
          onClick={() => handleHeadingClick(heading)}
          className={`cursor-pointer m-3 rounded-md p-3 ${activeHeading === heading ? 'bg-slate-300' : ''}`}
        >
          {heading}
        </li>
      ))}
    </ul>
  );
}

export default Header;
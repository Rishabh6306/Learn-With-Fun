import React from 'react';

function Content({ headings, activeHeading }) {
  return (
    <div className='w-full bg-violet-100'>
      {headings.map((heading) => (
        <p
          key={heading}
          className={`p-4 ${activeHeading !== heading ? 'hidden' : 'block'}`}
        >
          {heading}
        </p>
      ))}
    </div>
  );
}

export default Content;
import React from 'react';

function Content({ content, activeHeading }) {
  return (
    <div className='w-full p-4 pb-8 overflow-x-hidden h-[calc(100vh-3px)] bg-violet-100'>
      {Object.keys(content).map((heading) => (
        <div
          key={heading}
          className={`p-4 ${activeHeading !== heading ? 'hidden' : 'block'}`}
        >
        {content[heading]}
        </div>
      ))}
    </div>
  );
}

export default Content;
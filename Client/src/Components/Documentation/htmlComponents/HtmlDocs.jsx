import React, { useState } from 'react';
import Header from '../Header';
import Content from '../Content';

function HtmlDocs() {
  const [activeHeading, setActiveHeading] = useState('Getting Started');

  const handleHeadingClick = (heading) => {
    setActiveHeading(heading);
  };

  return (
    <div className='flex'>
      <Header headings={['Getting Started', 'HTML', 'CSS', 'JavaScript', 'ReactJS']} activeHeading={activeHeading} handleHeadingClick={handleHeadingClick} />
      <Content headings={['Getting Started', 'HTML', 'CSS', 'JavaScript', 'ReactJS']} activeHeading={activeHeading} />
    </div>
  );
}

export default HtmlDocs;
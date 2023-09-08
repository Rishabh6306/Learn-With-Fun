import React, { useState } from 'react';
import Header from '../Header';
import Content from '../Content';

function HtmlDocs() {
  const data = {
    'Getting Started': 'This is Getting Started content.',
    'HTML': 'HTML, or Hypertext Markup Language, is the fundamental language of the World Wide Web. It serves as the backbone for creating web pages and defining their structure. HTML uses a system of tags and attributes to mark up content, making it possible to display text, images, links, forms, and multimedia on web browsers. HTML has undergone significant evolution since its inception in the early 1990s when Tim Berners- Lee first created the concept of the World Wide Web.Over the years, various versions of HTML have been developed, with HTML5 being the latest major revision.HTML5 introduced modern features like multimedia elements, canvas for graphics, and semantic elements, allowing developers to create more interactive and accessible web experiences.With HTML\'s ongoing development and the adoption of web standards, it remains a crucial technology for web development, enabling the creation of websites and web applications that can be accessed across different devices and browsers.',

    'Table': 'This is Table content.',
    'Elemant': 'This is Elemant content.',
    'Tag': 'This is Tag content.',
  };

  const [activeHeading, setActiveHeading] = useState('Getting Started');

  const handleHeadingClick = (heading) => {
    setActiveHeading(heading);
  };

  return (
    <div className='flex'>
      <Header headings={Object.keys(data)} activeHeading={activeHeading} handleHeadingClick={handleHeadingClick} />
      <Content content={data} activeHeading={activeHeading} />
    </div>
  );
}

export default HtmlDocs;
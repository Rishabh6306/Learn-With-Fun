import React, { useState } from 'react';
import HtmlDocs from '../Documentation/htmlComponents/HtmlDocs'
import CssDocs from '../Documentation/cssComponents/CssDocs'
import JavaScriptDocs from '../Documentation/JavascriptComponents/JavaScriptDocs'
import ReactJsDocs from '../Documentation/ReactComponents/ReactJsDocs'

function MainDocsComponents() {
  const [activeTab, setActiveTab] = useState('HTML');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = ['HTML', 'CSS', 'JavaScript', 'ReactJS'];

  return (
    <div>
      <ul className='fixed w-full flex gap-4 justify-center items-center bg-purple-300 py-2 text-xl'>
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`cursor-pointer ${activeTab === tab ? 'border-b-2 border-purple-500' : ''}`}
          >
            {tab}
          </li>
        ))}
      </ul>
      {activeTab === 'HTML' && <HtmlDocs />}
      {activeTab === 'CSS' && <CssDocs />}
      {activeTab === 'JavaScript' && <JavaScriptDocs />}
      {activeTab === 'ReactJS' && <ReactJsDocs />}
    </div>
  );
}

export default MainDocsComponents;
import React, { useState, useEffect } from 'react';
import ReactJsDocs from './ReactData/ReactJsDocs';
import JavaScriptDocs from './JavascriptData/JavaScriptDocs';
import CssDocs from './cssData/CssDocs';
import HtmlDocs from './htmlData/HtmlDocs';

function MainDocsComponents() {
  const [activeTab, setActiveTab] = useState('HTML');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = ['HTML', 'CSS', 'JavaScript', 'ReactJS'];

  return (
    <div>
      <ul className='fixed overflow-y-auto w-full flex gap-4 p-4 ssm:p-4 ssm:justify-center items-center bg-purple-300 text-xl'>
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
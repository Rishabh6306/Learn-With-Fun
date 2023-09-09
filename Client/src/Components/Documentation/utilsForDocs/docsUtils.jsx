import { useState, useEffect } from 'react';

export const useDocsState = () => {
  const [activeHeading, setActiveHeading] = useState('Getting Started');
  const [showHeader, setShowHeader] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setShowHeader(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { activeHeading, showHeader, setActiveHeading, setShowHeader };
};

export const useHtmlDocsFunctions = (data, showHeader, setShowHeader, activeHeading, setActiveHeading) => {
  const handleHeadingClick = (heading) => {
    if (heading !== activeHeading) {
      setShowHeader(true);
    }
    setActiveHeading(heading);

    // Hide the header after 2 seconds
    setTimeout(() => {
      setShowHeader(false);
    }, 1000);
  };

  const toggleHeader = () => {
    setShowHeader((prevShowHeader) => !prevShowHeader);
  };

  return { handleHeadingClick, toggleHeader };
};
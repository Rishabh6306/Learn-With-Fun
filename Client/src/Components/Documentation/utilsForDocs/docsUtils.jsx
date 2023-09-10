import { useState, useEffect } from 'react';

export const useDocsState = () => {
  const [activeHeading, setActiveHeading] = useState('Getting Started');
  const [showHeader, setShowHeader] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const isScreenAbove768px = window.innerWidth >= 768;
      
      // Check if screen width has changed and showHeader is true
      if (isScreenAbove768px !== showHeader) {
        setShowHeader(isScreenAbove768px);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showHeader]);

  return { activeHeading, showHeader, setActiveHeading, setShowHeader };
};

export const useDocsFunctions = (data, showHeader, setShowHeader, activeHeading, setActiveHeading) => {
  const handleHeadingClick = (heading) => {
    if (heading !== activeHeading) {
      setShowHeader(true);
    }
    setActiveHeading(heading);

    // Hide the header after 2 seconds only if the screen width is below 768px
    if (showHeader && window.innerWidth < 768) {
      setTimeout(() => {
        setShowHeader(false);
      }, 1000);
    }
  };

  const toggleHeader = () => {
    setShowHeader((prevShowHeader) => !prevShowHeader);
  };

  return { handleHeadingClick, toggleHeader };
};
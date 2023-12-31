import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx'

// const location = useLocation();

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true) // Default value set to true

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useEffect hook to close the menu when screen size changes
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1280) {
        setIsMenuOpen(true); // Close the menu for larger screens
      } else {
        setIsMenuOpen(false); // Close the menu for smaller screens
      }
    }

    // Call the function initially to set the correct menu state based on screen size
    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`bg-center p-2 xl:flex xl:justify-between xl:items-center text-white ${isMenuOpen ? 'shadow-md' : ''} z-[11] sticky top-0 items-center`} style={{backgroundImage: 'url(/NavbarBgc.png)'}}>
      <div className="flex justify-between items-center">
        <span className="text-3xl font-[Poppins] font-bold cursor-pointer">
          <img
            className="w-20 inline ml-4 rounded-full"
            src='/LOGO.png'
            alt="logo"
          />
        </span>
        <span
          className="text-[44px] xl:hidden block mx-2 cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </span>
      </div>

      <ul
        className={`${isMenuOpen ? 'max-h-[34rem]' : 'max-h-0'
          } xl:flex xl:items-center z-[-1] xl:z-auto xl:static w-full xl:w-auto xl:py-0 py-2 xl:pl-0 pl-7 transition-max-h duration-700 ease-in-out overflow-hidden text-center`}
      >
        <li className="mx-2 my-4 2xl:my-0">
          <Link to="/home" onClick={scrollToTop} className={`text-2xl  hover:border-b-2 border-yellow-400 duration-500 ${location.pathname === '/' ? 'text-yellow-300' : ''}`}>
            Home
          </Link>
        </li>
        <li className="mx-2 my-4 2xl:my-0">
          <Link to="/documentation" onClick={scrollToTop} className={`text-2xl  hover:border-b-2 border-yellow-400 duration-500 ${location.pathname === '/documentation' ? 'text-yellow-300' : ''}`}>
            Documentation
          </Link>
        </li>
        <li className="mx-2 my-4 2xl:my-0">
          <Link to="/quiz" onClick={scrollToTop} className={`text-2xl  hover:border-b-2 border-yellow-400 duration-500 ${location.pathname === '/quiz' ? 'text-yellow-300' : ''}`}>
            Quiz
          </Link>
        </li>
        <li className="mx-2 my-4 2xl:my-0">
          <Link to="/notes" onClick={scrollToTop} className={`text-2xl  hover:border-b-2 border-yellow-400 duration-500 ${location.pathname === '/notes' ? 'text-yellow-300' : ''}`}>
            Notes
          </Link>
        </li>
        <li className="mx-2 my-4 2xl:my-0">
          <Link to="/games" onClick={scrollToTop} className={`text-2xl  hover:border-b-2 border-yellow-400 duration-500 ${location.pathname === '/games' ? 'text-yellow-300' : ''}`}>
            Games
          </Link>
        </li>
        <li className="mx-2 my-4 2xl:my-0">
          <Link to="/library" onClick={scrollToTop} className={`text-2xl  hover:border-b-2 border-yellow-400 duration-500 ${location.pathname === '/library' ? 'text-yellow-300' : ''}`}>
            Library
          </Link>
        </li>
        <li className="mx-2 my-4 2xl:my-0">
          <Link to="/leaderboard" onClick={scrollToTop} className={`text-2xl  hover:border-b-2 border-yellow-400 duration-500 ${location.pathname === '/leaderboard' ? 'text-yellow-300' : ''}`}>
            LeaderBoard
          </Link>
        </li>
        <li className="mx-3 my-4 2xl:my-0">
          <Link to="/contactUs" onClick={scrollToTop} className={`text-3xl  hover:border-b-2 border-yellow-400 duration-500 ${location.pathname === '/contactUs' ? 'text-yellow-300' : ''}`}>
            Contact Us
          </Link>
        </li>
        <Link to="/getStarted" onClick={scrollToTop} className="bg-orange-600 hover:bg-orange-500 active:bg-red-500 ease-in-out text-white text-xl py-3 px-7 mr-0 mx-6 font-[Poppins] duration-700 rounded-lg ">
          Get Started
        </Link>
        <Link to="/profile" className="text-orange-500 mr-2 block xl:hidden">
          <RxAvatar size={54} />
        </Link>

      </ul>

      <Link to="/profile" className="text-orange-500 mr-2 hidden xl:block">
        <RxAvatar size={54} />
      </Link>
    </nav>
  );
}

export default Navbar;
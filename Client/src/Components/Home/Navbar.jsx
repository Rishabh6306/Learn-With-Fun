import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

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

  return (
    <nav className={`bg-[#285250] p-2  xl:flex xl:justify-between xl:items-center text-white ${isMenuOpen ? 'shadow-md' : ''} z-[11] sticky top-0 items-center`}>
     <div className="flex justify-between items-center">
        <span className="text-3xl font-[Poppins] font-bold cursor-pointer">
          <img
            className="w-20 inline ml-4 rounded-full"
            src='./src/assets/LOGO.png'
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
          <Link to="/" className="text-2xl hover:text-[#FFE600] hover:border-b-2 border-yellow-400 duration-500">
            Home
          </Link>
        </li>
        <li className="mx-2 my-4 2xl:my-0">
          <Link to="/documentation" className="text-2xl hover:text-[#FFE600] hover:border-b-2 border-yellow-400 duration-500">
            Documentation
          </Link>
        </li>
        <li className="mx-2 my-4 2xl:my-0">
          <Link to="/quiz" className="text-2xl hover:text-[#FFE600] hover:border-b-2 border-yellow-400 duration-500">
            Quiz
          </Link>
        </li>
        <li className="mx-2 my-4 2xl:my-0">
          <Link to="/notes" className="text-2xl hover:text-[#FFE600] hover:border-b-2 border-yellow-400 duration-500">
            Notes
          </Link>
        </li>
        <li className="mx-2 my-4 2xl:my-0">
          <Link to="/games" className="text-2xl hover:text-[#FFE600] hover:border-b-2 border-yellow-400 duration-500">
            Games
          </Link>
        </li>
        <li className="mx-2 my-4 2xl:my-0">
          <Link to="/library" className="text-2xl hover:text-[#FFE600] hover:border-b-2 border-yellow-400 duration-500">
            Library
          </Link>
        </li>
        <li className="mx-2 my-4 2xl:my-0">
          <Link to="/leaderboard" className="text-2xl hover:text-[#FFE600] hover:border-b-2 border-yellow-400 duration-500">
            LeaderBoard
          </Link>
        </li>
        <li className="mx-3 my-4 2xl:my-0">
          <Link to="/contactUs" className="text-3xl hover:text-[#FFE600] hover:border-b-2 border-yellow-400 duration-500">
            Contact Us
          </Link>
        </li>
        <button className="bg-orange-600 hover:bg-orange-500 active:bg-red-500 ease-in-out text-white text-xl py-3 px-7 mx-6 font-[Poppins] duration-700 rounded-lg ">
          Get Started
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
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
      if (window.innerWidth >= 1536) {
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
    <nav className={`bg-gradient-to-b from-green-500 to-cyan-500 p-5  2xl:flex  2xl:justify-between 2xl:items-center text-white ${isMenuOpen ? 'shadow-md' : ''} z-[11] sticky top-0 items-center`}>
     <div className="flex justify-between items-center">
        <span className="text-3xl font-[Poppins] font-bold cursor-pointer">
          <img
            className="w-20 inline ml-4 rounded-full"
            src='./src/assets/LOGO.png'
            alt="logo"
          />
        </span>
        <span
          className="text-[44px] 2xl:hidden block mx-2 cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </span>
      </div>

      <ul
        className={`${isMenuOpen ? 'max-h-[34rem]' : 'max-h-0'
          } 2xl:flex 2xl:items-center z-[-1] 2xl:z-auto 2xl:static w-full 2xl:w-auto 2xl:py-0 py-2 2xl:pl-0 pl-7 transition-max-h duration-700 ease-in-out overflow-hidden text-center`}
      >
        <li className="mx-3 my-4 2xl:my-0">
          <Link to="/" className="text-3xl hover:text-indigo-800 hover:border-b-4 border-indigo-600 duration-500">
            Home
          </Link>
        </li>
        <li className="mx-3 my-4 2xl:my-0">
          <Link to="#" className="text-3xl hover:text-indigo-800 hover:border-b-4 border-indigo-600 duration-500">
            Documentation
          </Link>
        </li>
        <li className="mx-3 my-4 2xl:my-0">
          <Link to="#" className="text-3xl hover:text-indigo-800 hover:border-b-4 border-indigo-600 duration-500">
            Features
          </Link>
        </li>
        <li className="mx-3 my-4 2xl:my-0">
          <Link to="/notes" className="text-3xl hover:text-indigo-800 hover:border-b-4 border-indigo-600 duration-500">
            Notes
          </Link>
        </li>
        <li className="mx-3 my-4 2xl:my-0">
          <Link to="#" className="text-3xl hover:text-indigo-800 hover:border-b-4 border-indigo-600 duration-500">
            Games
          </Link>
        </li>
        <li className="mx-3 my-4 2xl:my-0">
          <Link to="/library" className="text-3xl hover:text-indigo-800 hover:border-b-4 border-indigo-600 duration-500">
            Library
          </Link>
        </li>
        <li className="mx-3 my-4 2xl:my-0">
          <Link to="#" className="text-3xl hover:text-indigo-800 hover:border-b-4 border-indigo-600 duration-500">
            Code
          </Link>
        </li>
        <li className="mx-3 my-4 2xl:my-0">
          <Link to="#" className="text-3xl hover:text-indigo-800 hover:border-b-4 border-indigo-600 duration-500">
            Contact Us
          </Link>
        </li>
        <button className="bg-violet-600 hover:bg-violet-500 active:bg-red-500 ease-in-out text-white text-xl py-3 px-10 mx-6 font-[Poppins] duration-700 rounded-lg ">
          Get Started
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
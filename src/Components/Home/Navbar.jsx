import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true) // Default value set to true

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useEffect hook to close the menu when screen size changes
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
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
    <header className=" h-screen">
      <nav className={`bg-gradient-to-b from-green-500 to-cyan-500 p-5 md:flex md:justify-between md:items-center text-white ${isMenuOpen ? 'shadow-md' : ''}`}>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-[Poppins] font-bold cursor-pointer">            <img
            className="w-20 inline ml-7 rounded-full"
            src='./src/assets/LOGO.png'
            alt="logo"
          />
          </span>
          <span
            className="text-3xl md:hidden block mx-2 cursor-pointer"
            onClick={toggleMenu}
          >
            {/* <AiOutlineMenu /> */}
            {isMenuOpen ? <AiOutlineClose/> : <AiOutlineMenu/>}
          </span>
        </div>

        <ul
          className={`${isMenuOpen ? 'max-h-[28rem]' : 'max-h-0'
            } md:flex md:items-center z-[-1] md:z-auto md:static w-full md:w-auto md:py-0 py-2 md:pl-0 pl-7 transition-max-h duration-700 ease-in-out overflow-hidden text-center`}
        >
          <li className="mx-5 my-6 md:my-0">
            <a href="#" className="text-3xl hover:text-indigo-800 hover:border-b-4 border-indigo-600 duration-500">
              Home
            </a>
          </li>
          <li className="mx-5 my-6 md:my-0">
            <a href="#" className="text-3xl hover:text-indigo-800 hover:border-b-4 border-indigo-600 duration-500">
              Documentation
            </a>
          </li>
          <li className="mx-5 my-6 md:my-0">
            <a href="#" className="text-3xl hover:text-indigo-800 hover:border-b-4 border-indigo-600 duration-500">
              Features
            </a>
          </li>
          <li className="mx-5 my-6 md:my-0">
            <a href="#" className="text-3xl hover:text-indigo-800 hover:border-b-4 border-indigo-600 duration-500">
              Notes
            </a>
          </li>
          <li className="mx-5 my-6 md:my-0">
            <a href="#" className="text-3xl hover:text-indigo-800 hover:border-b-4 border-indigo-600 duration-500">
              Games
            </a>
          </li>
          <li className="mx-5 my-6 md:my-0">
            <a href="#" className="text-3xl hover:text-indigo-800 hover:border-b-4 border-indigo-600 duration-500">
              Contact Us
            </a>
          </li>
          <button className="bg-violet-300 hover:bg-vi[#ff4000] active:bg-red-500 ease-in-out text-white text-xl py-3 px-10 mx-8 font-[Poppins] durationindigo-800 hover:border-b-4 border-indigo-600ded-md">
            Get Started
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
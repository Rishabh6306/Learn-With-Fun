import React from 'react';
import { Link } from "react-router-dom"
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaArrowCircleUp } from 'react-icons/fa';

function Footer() {
  // Function to scroll to the top of the page when the up arrow is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='bg-[#060620] text-white relative'>
      {/* Button to scroll back to the top */}
      <div onClick={scrollToTop} className='cursor-pointer float-right text-2xl hover:text-4xl text-yellow-500'>
        <FaArrowCircleUp />
      </div>
      {/* Social media icons */}
      <div className='flex space-x-4 text-3xl justify-center pt-3'>
        <Link to="https://www.linkedin.com/in/rishabh6306/" target='blank' className='text-blue-600'><FaLinkedin /></Link>
        <Link to="https://github.com/Rishabh6306/" target='blank' className=''><FaGithub /></Link>
        <Link to="https://www.instagram.com/rishabhsrivastava723/" target='blank' className='text-red-600'><FaInstagram /></Link>
        <Link to="https://www.facebook.com/profile.php?id=100092759361139" target='blank' className='text-blue-700'><FaFacebook /></Link>
      </div>
      {/* Copyright information */}
      <p className='py-3 mt-9 border-white border-t-[1px] text-center'>
        Copyright © 2023 <span className='text-amber-400'>Learn With Fun</span>. All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer;
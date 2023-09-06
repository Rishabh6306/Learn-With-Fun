import React from 'react'
import Navbar from '../Components/Home/Navbar'
import Main from '../Components/Home/Main';
import Programs from '../Components/Home/Programs';
import Contact from '../Components/Home/Contact';

function HomePage() {
  return (
    <>
      <Navbar />
      <Main />
      <Programs />
      <Contact/>
    </>
  )
}

export default HomePage;
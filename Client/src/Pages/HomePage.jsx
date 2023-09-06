import React from 'react'
import Navbar from '../Components/Home/Navbar'
import Main from '../Components/Home/Main';
import Programs from '../Components/Home/Programs';
import Contact from '../Components/Home/Contact';
import Footer from '../Components/Footer/Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <Main />
      <Programs />
      <Contact/>
      <Footer/>
    </>
  )
}

export default HomePage;
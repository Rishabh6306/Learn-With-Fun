import React from 'react'
import Score from '../Components/ScoreCard/Score';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Home/Navbar';

function ScoreCardPage() {
  return (
    <>
    <Navbar/>
      <Score/>
      <Footer/>
    </>
  )
}

export default ScoreCardPage;
import React from 'react'
import Navbar from '../Components/Home/Navbar'
import QuizUI from '../Components/Quiz/QuizUI';
import Footer from '../Components/Footer/Footer';

function QuizPage() {
  return (
    <div>
      <Navbar/>
      <QuizUI/>
      <Footer/>
    </div>
  )
}

export default QuizPage;
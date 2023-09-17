import React from 'react'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Footer/Footer';
import Quiz from '../Components/Quiz/Quiz.Jsx';

function QuizPage() {
  return (
    <div>
      <Navbar />
      <Quiz />
      <Footer />
    </div>
  )
}

export default QuizPage;
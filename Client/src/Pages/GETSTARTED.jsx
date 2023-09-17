import React from 'react'
import MainDocsComponents from '../Components/Documentation/MainDocsComponents';
import { Link } from 'react-router-dom'
import { GiFastBackwardButton } from 'react-icons/gi'

const goBack = () => window.history.back();

function GetStarted() {
  return (
    <div>
      <div className="bg-slate-300 w-full text-center ">
        <button onClick={goBack} className="bg-blue-800 text-white px-4 py-2 m-3 rounded-md"><GiFastBackwardButton /></button>
        <Link to="/quiz" className="text-xl tracking-widest text-blue-600 hover:underline">Get the Quiz</Link>
      </div>
      <MainDocsComponents />
    </div>
  )
}

export default GetStarted;
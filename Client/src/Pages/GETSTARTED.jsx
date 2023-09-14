import React from 'react'
import MainDocsComponents from '../Components/Documentation/MainDocsComponents';
import { Link } from 'react-router-dom'

function GetStarted() {
  return (
    <div>
     <Link to="/quiz" className="inline-block w-full bg-slate-300 py-3 text-xl text-center tracking-widest text-blue-600 hover:underline">Get the Quiz</Link>
      <MainDocsComponents/>
    </div>
  )
}

export default GetStarted;
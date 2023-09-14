import React from 'react'
import './App.css'
import Library from './Pages/Library';
import HomePage from './Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import DetailCard from './Components/BookStore/DetailCard';
import NotesPage from './Pages/NotesPage';
import ContactPage from './Pages/ContactPage';
import QuizPage from './Pages/QuizPage'
import LeaderBoard from './Pages/LeaderBoardPage';
import DocumentationPage from './Pages/DocumentationPage';
import GamesPage from './Pages/GamesPage';

import NumberGuessingGame from './Components/Games/NumberGuessing/NumberGuessingGame';
import TypingGame from './Components/Games/SpeedTyping/TypingGame';
import Game15Puzzle from './Components/Games/Game15Puzzle/Game15Puzzle';
import GetStarted from './Pages/GetStarted';

function App() {
  return (
    <Routes >
      <Route path="/" element={<HomePage />} />
      <Route path="/library" element={<Library />} />
      <Route path="/detailPage" element={<DetailCard />} />
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/contactUs" element={<ContactPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="/documentation" element={<DocumentationPage />} />

      {/* Games Pages  */}
      <Route path="/games" element={<GamesPage />} />
      <Route path="/guessGame" element={<NumberGuessingGame />} />
      <Route path="/typingGame" element={<TypingGame />} />
      <Route path="/15puzzle" element={<Game15Puzzle /> } />

      {/* GET STARTED BUTTON  */}
      <Route path="/getStarted" element={<GetStarted /> } />
    </Routes>
  )
}

export default App;
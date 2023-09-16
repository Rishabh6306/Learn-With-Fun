import React, { Suspense } from 'react'
import './App.css'
import { Route, Routes }  from 'react-router-dom';

const HomePage = React.lazy(() => import('./Pages/HomePage'));

const Library = React.lazy(() => import('./Pages/Library'));

const DetailCard = React.lazy(() => import('./Components/BookStore/DetailCard'));


const NotesPage = React.lazy(() => import('./Pages/NotesPage'));

const ContactPage = React.lazy(() => import('./Pages/ContactPage'));

const QuizPage = React.lazy(() => import('./Pages/QuizPage'));

const LeaderBoard = React.lazy(() => import('./Pages/LeaderBoardPage'));

const DocumentationPage = React.lazy(() => import('./Pages/DocumentationPage'));

const GamesPage = React.lazy(() => import('./Pages/GamesPage'));

const GetStarted = React.lazy(() => import('./Pages/GetStarted'));


const NumberGuessingGame = React.lazy(() => import('./Components/Games/NumberGuessing/NumberGuessingGame'));

const TypingGame = React.lazy(() => import('./Components/Games/SpeedTyping/TypingGame'));

const Game15Puzzle = React.lazy(() => import('./Components/Games/Game15Puzzle/Game15Puzzle'));

const BubbleGame = React.lazy(() => import('./Components/Games/BubbleGame/BubbleGame'));



function App() {
  return (
    <Suspense fallback={<p>Page is Loading...</p>}>
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
      <Route path="/15puzzle" element={<Game15Puzzle />} />
      <Route path="/bubbleGame" element={<BubbleGame />} />

      {/* GET STARTED BUTTON  */}
      <Route path="/getStarted" element={<GetStarted />} />
    </Routes>
    </Suspense>
  )
}

export default App;
import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

const Username = React.lazy(() => import('./Components/Login&Signup/Username'));
const Register = React.lazy(() => import('./Components/Login&Signup/Register'));
const Password = React.lazy(() => import('./Components/Login&Signup/Password'));
const Profile = React.lazy(() => import('./Components/Login&Signup/Profile'));
const Recovery = React.lazy(() => import('./Components/Login&Signup/Recovery'));
const Reset = React.lazy(() => import('./Components/Login&Signup/Reset'));

// Lazy-loaded components
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
    <Suspense fallback={
      // Fallback loading UI
      <div className='bg-blue-950 h-screen flex flex-col items-center justify-center'>
        <p className='loader w-20 h-20 relative'></p>
        <span className='mt-4 text-white'>Loading..</span>
      </div>
    }>
      {/* Define your routes using the <Routes> and <Route> components */}
      <Routes>

        {/* Added Authentication Page  */}
        <Route path="/" element={<Username />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<Password />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recovery" element={<Recovery />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/library" element={<Library />} />
        <Route path="/detailPage" element={<DetailCard />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/contactUs" element={<ContactPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/documentation" element={<DocumentationPage />} />

        {/* Games Pages */}
        <Route path="/games" element={<GamesPage />} />
        <Route path="/guessGame" element={<NumberGuessingGame />} />
        <Route path="/typingGame" element={<TypingGame />} />
        <Route path="/15puzzle" element={<Game15Puzzle />} />
        <Route path="/bubbleGame" element={<BubbleGame />} />

        {/* GET STARTED BUTTON */}
        <Route path="/getStarted" element={<GetStarted />} />
      </Routes>
    </Suspense>
  );
}

export default App;

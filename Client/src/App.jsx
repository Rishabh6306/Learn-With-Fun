import React from 'react'
import './App.css'
import Library from './Pages/Library';
import HomePage from './Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import DetailCard from './Components/BookStore/DetailCard';
import NotesPage from './Pages/NotesPage';

function App() {
  return (
    <Routes >
      <Route path="/" element={<HomePage/>} />
      <Route path="/library" element={<Library/>} />
      <Route path="/detailPage" element={<DetailCard/>} />
      <Route path="/notes" element={<NotesPage/>} />
    </Routes>
  )
}

export default App;
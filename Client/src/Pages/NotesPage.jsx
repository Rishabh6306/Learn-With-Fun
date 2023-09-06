import React from 'react'
import Navbar from '../Components/Home/Navbar'
import NoteDisplay from '../Components/Notes/NoteDisplay'
import Footer from '../Components/Footer/Footer'

function NotesPage() {
    return (
        <>
            <Navbar />
            <NoteDisplay />
            <Footer />
        </>
    )
}

export default NotesPage;

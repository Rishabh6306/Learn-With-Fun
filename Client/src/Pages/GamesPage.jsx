import React from 'react'
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Footer/Footer';
import AllGames from '../Components/Games/AllGames';

function GamesPage() {
    return (
        <>
            <Navbar />
            <AllGames />
            <Footer />
        </>
    )
}

export default GamesPage;
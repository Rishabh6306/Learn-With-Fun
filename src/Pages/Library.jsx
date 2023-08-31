import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

function Library() {
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);
    const [quoteIndex, setQuoteIndex] = useState(0);

    const searchBook = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40`);
            setBookData(response.data.items);
        } catch (error) {
            console.error("Error fetching book data:", error);
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            searchBook();
        }
    }

    const quotes = [
        "A room without books is like a body without a soul.",
        "Libraries store the energy that fuels the imagination.",
        "They open up windows to the world and inspire us to explore and achieve",
        "I have always imagined that Paradise will be a kind of library.",
        "Libraries were full of ideas—perhaps the most dangerous and powerful of all weapons.",
        "In the library, time is dammed up—not just stopped but saved.",
        "The library is a gathering pool of narratives and of the people who come to find them.",
        "A library is a place where you can lose your innocence without losing your virginity.",
        "I have found the most valuable thing in my wallet is my library card.",
        "When in doubt, go to the library.",
        "Libraries will get you through times of no money better than money will get you through times of no libraries.",
        "Librarians are tour-guides for all of knowledge."
    ]
    
    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 5000); // Change quote every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-purple-500 to-70% relative'>
                <img className='w-full h-[55vh] md:h-[65vh]' src="./src/Components/BookStore/images/bg-image.jpg" alt="img" />
                <div className='w-full h-[36vh] md:h-[45vh] absolute top-14 flex flex-col justify-center items-center'>
                    <h1 className='text-5xl font-bold text-white'>Our Library</h1>
                    <img className='w-40 md:w-48' src="./src/Components/BookStore/images/bg2.png" alt="img" />
                    <div className="w-full md:w-2/5 inline-block p-3 md:p-4 px-7 text-2xl rounded-[2.5rem] outline-none bg-white">
                        <input
                            className='text-[#4a982d] text-2xl outline-none'
                            type="text"
                            placeholder="Search for books..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button className='float-right' onClick={searchBook}><AiOutlineSearch /></button>
                    </div>
                </div>
            </div>

            <span className="bg-indigo-100 w-full py-3 mx-auto text-center text-gray-700 text-2xl lg:text-3xl font-bold absolute font-poppins italic animate-color-change"><ImQuotesLeft/> {quotes[quoteIndex]} <span className='float-right pt-5'><ImQuotesRight/></span></span>

        </>
    )
}

export default Library;
import React from 'react';
import { Link } from "react-router-dom"

function Programs() {
    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='bg-blue-400'>
            <div className="bg-gradient-to-tr from-blue-800 to-[#0b84a9] h-full rounded-tl-[10rem] md:rounded-tl-[20rem] rounded-br-[10rem] md:rounded-br-[18rem]  flex flex-col justify-center p-8">
                <h1 className='text-center text-4xl md:text-5xl leading-tight tracking-wider text-amber-400 my-5'>Programs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 m-2 md:m-24 2xl:mx-60">
                    {/* Documentation Section */}
                    <div className="bg-[#e9e926] rounded-3xl p-5 flex flex-col justify-center items-center">
                        <h1 className='mb-4 md:text-2xl text-[1.3rem] font-bold tracking-widest'>Documentation</h1>
                        <p className='mb-4 font-medium text-gray-700'>Explore extensive documentation to dive into web development's aspects. Unlock learning opportunities and broaden your horizons. Start your limitless journey today.</p>
                        <Link to="/documentation" onClick={scrollToTop} className='bg-orange-500 text-xl px-6 py-3 my-3 rounded-3xl'>Read Now</Link>
                    </div>

                    {/* Quiz Section */}
                    <div className="bg-[aqua] rounded-3xl p-5 flex flex-col justify-center items-center">
                        <h1 className='mb-4 text-2xl font-bold tracking-widest'>Quiz</h1>
                        <p className='mb-4 font-medium text-gray-700'>Unlock your knowledge with an exciting quiz! Dive into a world of questions and answers, and challenge your intellect. Let's embark on this learning adventure together.</p>
                        <Link to="/quiz" onClick={scrollToTop} className='bg-orange-500 text-xl px-6 py-3 my-3 rounded-3xl'>Challenge Yourself</Link>
                    </div>

                    {/* Notes Section */}
                    <div className="md:bg-[aqua] bg-[#e9e926] rounded-3xl p-5 flex flex-col justify-center items-center">
                        <h1 className='mb-4 text-2xl font-bold tracking-widest'>Notes</h1>
                        <p className='mb-4 font-medium text-gray-700'>Explore our notes page for effortless note creation, editing, deletion, and access anytime you need it. Simplify your note management now.</p>
                        <Link to="/notes" onClick={scrollToTop} className='bg-orange-500 text-xl px-6 py-3 my-3 rounded-3xl'>Create Notes</Link>
                    </div>

                    {/* Library Section */}
                    <div className="bg-[aqua] md:bg-[#e9e926] rounded-3xl p-5 flex flex-col justify-center items-center">
                        <h1 className='mb-4 text-2xl font-bold tracking-widest'>Library</h1>
                        <p className='mb-4 font-medium text-gray-700'>Explore our library to search and discover books. Find details about each book to enhance your reading experience. Start exploring now for a world of literary adventures!</p>
                        <Link to="/library" onClick={scrollToTop} className='bg-orange-500 text-xl px-6 py-3 my-3 rounded-3xl'>Get Books</Link>
                    </div>

                    {/* Games Section */}
                    <div className="bg-[#e9e926] rounded-3xl p-5 flex flex-col justify-center items-center">
                        <h1 className='mb-4 text-2xl font-bold tracking-widest'>Games</h1>
                        <p className='mb-4 font-medium text-gray-700'>Embark on a gaming adventure that will push your boundaries and play games, With a variety of games to choose from, you'll not only have fun but also continue to learn and grow. So, start your journey now and explore the games that await you</p>
                        <Link to="/games" onClick={scrollToTop} className='bg-orange-500 text-xl px-6 py-3 my-3 rounded-3xl'>Play Games</Link>
                    </div>

                    {/* LeaderBoard Section */}
                    <div className="bg-[aqua] rounded-3xl p-5 flex flex-col justify-center items-center">
                        <h1 className='mb-4 text-2xl font-bold tracking-widest'>LeaderBoard</h1>
                        <p className='mb-4 font-medium text-gray-700'>LeaderBoard displays your journey, records achievements, and helps you stay on track. Monitor your advancement and achieve your goals effortlessly.</p>
                        <Link to="/leaderboard" onClick={scrollToTop} className='bg-orange-500 text-xl px-6 py-3 my-3 rounded-3xl'>Track Progress</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs;
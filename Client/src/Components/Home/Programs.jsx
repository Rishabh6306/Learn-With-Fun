import React from 'react'
import { Link } from "react-router-dom"

function Programs() {
    return (
        <div className='bg-[#25ffff]'>
            <div className="bg-[#0e320ec0] h-full rounded-tl-[10rem] md:rounded-tl-[20rem] rounded-br-[10rem] md:rounded-br-[18rem]  flex flex-col justify-center p-8">
                <h1 className='text-center text-4xl md:text-5xl leading-tight tracking-wider text-amber-400 my-5'>Programs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 m-2 md:m-24">
                    <div className="bg-[#e9e926] rounded-3xl p-5 flex flex-col justify-center items-center">
                        <h1 className='mb-4 md:text-2xl text-[1.3rem] font-bold tracking-widest'>Documentation</h1>
                        <p className='mb-4 font-medium text-gray-700'>Explore extensive documentation to dive into web development's aspects. Unlock learning opportunities and broaden your horizons. Start your limitless journey today.</p>
                        <Link to="/documentation" className='bg-orange-500 text-xl px-6 py-3 my-3 rounded-3xl'>Read Now</Link>
                    </div>

                    <div className="bg-[aqua] rounded-3xl p-5 flex flex-col justify-center items-center">
                        <h1 className='mb-4 text-2xl font-bold tracking-widest'>Quiz</h1>
                        <p className='mb-4 font-medium text-gray-700'>Unlock your knowledge with an exciting quiz! Dive into a world of questions and answers, and challenge your intellect. Let's embark on this learning adventure together.</p>
                        <Link to="/quiz" className='bg-orange-500 text-xl px-6 py-3 my-3 rounded-3xl'>Challenge Yourself</Link>
                    </div>

                    <div className="md:bg-[aqua] bg-[#e9e926] rounded-3xl p-5 flex flex-col justify-center items-center">
                        <h1 className='mb-4 text-2xl font-bold tracking-widest'>Notes</h1>
                        <p className='mb-4 font-medium text-gray-700'>Explore our notes page for effortless note creation, editing, deletion, and access anytime you need it. Simplify your note management now.</p>
                        <Link to="/notes" className='bg-orange-500 text-xl px-6 py-3 my-3 rounded-3xl'>Create Notes</Link>
                    </div>

                    <div className="bg-[aqua] md:bg-[#e9e926] rounded-3xl p-5 flex flex-col justify-center items-center">
                        <h1 className='mb-4 text-2xl font-bold tracking-widest'>Library</h1>
                        <p className='mb-4 font-medium text-gray-700'>Explore our library to search and discover books. Find details about each book to enhance your reading experience. Start exploring now for a world of literary adventures!</p>
                        <Link to="/library" className='bg-orange-500 text-xl px-6 py-3 my-3 rounded-3xl'>Get Books</Link>
                    </div>

                    <div className="bg-[aqua] sm:bg-[#e9e926] rounded-3xl p-5 flex flex-col justify-center items-center">
                        <h1 className='mb-4 text-2xl font-bold tracking-widest'>Games</h1>
                        <p className='mb-4 font-medium text-gray-700'>Unlock games after the quiz; achieve 50% or above quiz score. Embark on a gaming adventure, push your boundaries and unlocked games.</p>
                        <Link to="/quiz" className='bg-orange-500 text-xl px-6 py-3 my-3 rounded-3xl'>Play Games</Link>
                    </div>

                    <div className="bg-[aqua] rounded-3xl p-5 flex flex-col justify-center items-center">
                        <h1 className='mb-4 text-2xl font-bold tracking-widest'>Scorecard</h1>
                        <p className='mb-4 font-medium text-gray-700'>Score Card displays your journey, records achievements, and helps you stay on track. Monitor your advancement and achieve your goals effortlessly.</p>
                        <Link to="/quiz" className='bg-orange-500 text-xl px-6 py-3 my-3 rounded-3xl'>Track Progress</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs;
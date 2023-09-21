import React from 'react';
import { GiFastBackwardButton } from 'react-icons/gi';

function TypingGmeUI({ goBack, timeLeft, mistakes, currentWpm, accuracy, resetGame, renderTextWithHighlights, music, playMistakeSound, setPlayMistakeSound }) {
    return (
        <>
            {/* Background */}
            <div className='bg-center bg-cover h-[130vh] md:h-screen flex pt-4 sm:pt-0 sm:items-center justify-center' style={{backgroundImage: 'url(/TypingBgc.jpg)'}}>
                {/* Main Content */}
                <div className='bg-black text-white rounded-xl sm:w-11/12 md:w-9/12 h-[92%] ssm:h-auto ssm:mx-5'>
                    {/* Header */}
                    <div className='flex items-center justify-between mx-3'>
                        {/* Back Button */}
                        <button onClick={goBack} className="bg-blue-800 text-white px-4 py-2 m-3 rounded-md"><GiFastBackwardButton /></button>
                        {/* Title */}
                        <h1 className='text-white text-3xl ssm:mr-10 sm:mr-40 lg:mr-52'>Typing Game</h1>
                    </div>

                    {/* Game Stats */}
                    <div className='border-blue-700 border-2 m-2 ssm:m-5 p-2 ssm:p-4 rounded-2xl'>
                        <div className='border-b-2 border-blue-700 mb-1 sm:mb-6 flex justify-around py-4 flex-wrap'>
                            {/* Time Left */}
                            <span>
                                <strong>Time Left:</strong> {Math.floor(timeLeft / 60)}:
                                {String(Math.floor(timeLeft % 60)).padStart(2, '0')}
                            </span>
                            {/* Mistakes */}
                            <span>
                                <strong>Mistakes:</strong> {mistakes}
                            </span>
                            {/* WPM (Words Per Minute) */}
                            <span>
                                <strong>WPM:</strong> {currentWpm}
                            </span>
                            {/* Accuracy */}
                            <span>
                                <strong>Accuracy:</strong> {accuracy}%
                            </span>
                            {/* Try Again Button */}
                            <span>
                                <button
                                    className='bg-blue-800 py-2 rounded-3xl px-8 mt-2 md:mt-0'
                                    onClick={resetGame}
                                >
                                    Try Again
                                </button>
                            </span>
                        </div>

                        {/* Text Input Area */}
                        <div className='text-gray-400 text-[15px] sm:text-xl tracking-wide mb-3'>
                            {renderTextWithHighlights()}
                        </div>

                        {/* Audio Element for Mistake Sound */}
                        {/* Add an <audio> element to play the mistake sound */}
                        <audio src={music} autoPlay={playMistakeSound} onEnded={() => setPlayMistakeSound(false)} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TypingGmeUI;
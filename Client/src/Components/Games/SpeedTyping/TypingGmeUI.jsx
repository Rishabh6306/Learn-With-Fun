import React from 'react'
import { GiFastBackwardButton } from 'react-icons/gi'

function TypingGmeUI({ goBack, timeLeft, mistakes, currentWpm, accuracy, resetGame, renderTextWithHighlights, music, playMistakeSound, setPlayMistakeSound }) {
    return (
        <>
            <div className='bg-[url(./src/Components/Games/SpeedTyping/TypingBgc.jpg)] bg-center bg-cover h-[130vh] md:h-screen flex pt-4 sm:pt-0 sm:items-center justify-center'>
                <div className='bg-black text-white rounded-xl sm:w-11/12 md:w-9/12 h-[92%] ssm:h-auto ssm:mx-5'>
                    <div className='flex items-center justify-between mx-3'>
                        <button onClick={goBack} className="bg-blue-800 text-white px-4 py-2 m-3 rounded-md"><GiFastBackwardButton /></button>
                        <h1 className='text-white text-3xl ssm:mr-10 sm:mr-40 lg:mr-52'>Typing Game</h1>
                    </div>

                    <div className='border-blue-700 border-2 m-2 ssm:m-5 p-2 ssm:p-4 rounded-2xl'>
                        <div className='border-b-2 border-blue-700 mb-1 sm:mb-6 flex justify-around py-4 flex-wrap'>
                            <span>
                                <strong>Time Left:</strong> {Math.floor(timeLeft / 60)}:
                                {String(Math.floor(timeLeft % 60)).padStart(2, '0')}
                            </span>
                            <span>
                                <strong>Mistakes:</strong> {mistakes}
                            </span>
                            <span>
                                <strong>WPM:</strong> {currentWpm}
                            </span>
                            <span>
                                <strong>Accuracy:</strong> {accuracy}%
                            </span>
                            <span>
                                <button
                                    className='bg-blue-800 py-2 rounded-3xl px-8 mt-2 md:mt-0'
                                    onClick={resetGame}
                                >
                                    Try Again
                                </button>
                            </span>
                        </div>

                        <div className='text-gray-400 text-[15px] sm:text-xl tracking-wide mb-3'>
                            {renderTextWithHighlights()}
                        </div>
                        {/* Add an <audio> element to play the mistake sound */}
                        <audio src={music} autoPlay={playMistakeSound} onEnded={() => setPlayMistakeSound(false)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TypingGmeUI;
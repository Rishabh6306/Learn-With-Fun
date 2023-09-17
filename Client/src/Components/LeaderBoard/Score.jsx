import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';

function Score() {
    const [scores, setScores] = useState({});

    // Read scores from localStorage and set them in the state when the component mounts.
    useEffect(() => {
        const storedScores = {
            HTML: parseInt(localStorage.getItem('quizScoreHTML')) || 0,
            CSS: parseInt(localStorage.getItem('quizScoreCSS')) || 0,
            JavaScript: parseInt(localStorage.getItem('quizScoreJavaScript')) || 0,
            Python: parseInt(localStorage.getItem('quizScorePython')) || 0,
            ReactJS: parseInt(localStorage.getItem('quizScoreReactJS')) || 0,
        };
        setScores(storedScores);
    }, []);

    // Define the maximum possible score for each section (adjust as needed)
    const maximumScore = 42; // Change this value based on your requirements

    // Calculate the percentage for each section
    const percentages = Object.entries(scores).reduce((acc, [section, score]) => {
        // Calculate the percentage based on the section's score and maximum score
        acc[section] = (score / maximumScore) * 100;
        return acc;
    }, {});

    return (
        <div className="h-screen bg-red-300 border-8 border-red-600">
            <div className="h-full bg-blue-900 rounded-tr-[7rem] rounded-bl-[7rem] md:rounded-tr-[12rem] md:rounded-bl-[12rem]">
                <div className="flex items-center justify-center">
                    <h1 className='bg-pink-600 rounded-t-[3rem] rounded-b-[10rem] p-6 md:px-10 md:py-5 text-3xl md:text-4xl text-white'>LeaderBoard</h1>
                </div>
                <div className="h-[85vh] p-10 md:px-28">
                    {Object.entries(scores).map(([section, score], index) => (
                        <div key={index}>
                            {/* Render ProgressBar component with label, maximumPercentage, and interval */}
                            <ProgressBar
                                label={section}
                                maximumPercentage={percentages[section]}
                                interval={100}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Score;
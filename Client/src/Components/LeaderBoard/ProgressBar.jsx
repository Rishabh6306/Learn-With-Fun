import React, { useEffect, useState } from 'react';

const ProgressBar = ({ label, maximumPercentage, interval }) => {
    // State to track the progress percentage
    const [progress, setProgress] = useState(0);

    // Ensure maximumPercentage does not exceed 100%
    if (maximumPercentage > 100) {
        maximumPercentage = 100;
    }

    // Effect to update progress based on interval and maximumPercentage
    useEffect(() => {
        // Create an interval to increment progress
        const progressInterval = setInterval(() => {
            if (progress < maximumPercentage) {
                setProgress((prevProgress) => {
                    if (prevProgress < maximumPercentage) {
                        // Increment progress if it's less than maximumPercentage
                        return prevProgress + 1;
                    }
                    return prevProgress;
                });
            }
        }, interval);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(progressInterval);
        }
    }, [progress, maximumPercentage, interval]);

    return (
        <div className="mb-6">
            {/* Display the label and progress percentage */}
            <div className="flex mb-2 items-center justify-between text-2xl text-white">
                <div>{label}</div>
                <div className="text-right">
                    <span className="text-[1rem] font-semibold inline-block text-[#3bffdb]">
                        {progress}%
                    </span>
                </div>
            </div>
            {/* Render the progress bar */}
            <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-teal-200">
                <div
                    style={{ width: `${progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
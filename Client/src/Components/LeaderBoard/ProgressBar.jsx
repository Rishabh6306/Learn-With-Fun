import React, { useEffect, useState } from 'react';

const ProgressBar = ({ label, maximumPercentage, interval }) => {
    const [progress, setProgress] = useState(0);

    if (maximumPercentage > 100) {
        maximumPercentage = 100;
    }

    useEffect(() => {
        const progressInterval = setInterval(() => {
            if (progress < maximumPercentage) {
                setProgress((prevProgress) => {
                    if (prevProgress < maximumPercentage) {
                        return prevProgress + 1;
                    }
                    return prevProgress;
                });
            }
        }, interval);

        return () => {
            clearInterval(progressInterval);
        }
    }, [progress, maximumPercentage, interval]);

    return (
        <div className="mb-6">
            <div className="flex mb-2 items-center justify-between text-2xl text-white">
                <div>{label}</div>
                <div className="text-right">
                    <span className="text-[1rem] font-semibold inline-block text-[#3bffdb]">
                        {progress}%
                    </span>
                </div>
            </div>
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
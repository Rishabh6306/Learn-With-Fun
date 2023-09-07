import React from 'react';
import ProgressBar from './ProgressBar';

function Score() {
    return (
        <div className="h-screen bg-red-300 border-8 border-red-600">
            <div className="h-full bg-blue-900 rounded-tr-[7rem] rounded-bl-[7rem] md:rounded-tr-[12rem] md:rounded-bl-[12rem]">
                <div className="flex items-center justify-center">
                    <h1 className='bg-pink-600 rounded-t-[3rem] rounded-b-[10rem] p-6 md:px-10 md:py-5 text-3xl md:text-4xl text-white'>LeaderBoard</h1>
                </div>
                <div className="h-[85vh] p-10 md:p-28">
                    <ProgressBar label="HTML" maximumPercentage={80} interval={40} />
                    <ProgressBar label="CSS" maximumPercentage={60} interval={60} />
                    <ProgressBar label="JavaScript" maximumPercentage={40} interval={80} />
                </div>
            </div>
        </div>
    );
}

export default Score;


// import React from 'react';
// import ProgressBar from './ProgressBar';

// function Score() {
//   return (
//     <div className="h-screen bg-[url(./src/Components/ScoreCard/assests/bg-scorecard.jpg)] bg-center">
//     <div className="h-[85vh] p-28">
//       <ProgressBar label="HTML" maximumPercentage={80} interval={40} />
//       <ProgressBar label="CSS" maximumPercentage={60} interval={60} />
//       <ProgressBar label="JavaScript" maximumPercentage={40} interval={80} />
//     </div>
//     </div>
//   );
// }

// export default Score;
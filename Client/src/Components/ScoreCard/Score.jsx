import React from 'react';
import ProgressBar from './ProgressBar';

function Score() {
  return (
    <div className="h-[85vh] m-24">
      <ProgressBar label="HTML" maximumPercentage={80} interval={40} />
      <ProgressBar label="CSS" maximumPercentage={60} interval={60} />
      <ProgressBar label="JavaScript" maximumPercentage={40} interval={80} />
    </div>
  );
}

export default Score;
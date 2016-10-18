import React from 'react';

import '../assets/Summary.css';

const Summary = ({text, index}) => {
  const words = text.split(' ');
  return (
    <div className='summary'>
      <p>
        {words.slice(0, index).join(' ')}
        <span className="currentWord"> {words[index]} </span>
        {words.slice(index + 1, words.length).join(' ')}
      </p>
    </div>
  );
};

export default Summary;
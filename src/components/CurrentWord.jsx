import React from 'react';

import Word from './Word';

const CurrentWord = ({word}) => (
  <div className="currentWord">
    <Word word={word} />
  </div>
);

export default CurrentWord;
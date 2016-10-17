import React from 'react';

import Word from './Word';

const CurrentWord = ({word}) => (
  <span className="CurrentWord"><Word word={word} /></span>
);

export default CurrentWord;
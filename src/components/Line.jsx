import React, {Component} from 'react';

import Word from './Word';
import CurrentWord from './CurrentWord';

import '../assets/Line.css';

const Line = ({index, words}) => (
  <div className="line">
      <p>
        <Word word={words[index - 2]}/>
        <span> </span>
        <Word word={words[index - 1]}/>
        <span> </span>
        <CurrentWord word={words[index]} />
        <span> </span>
        <Word word={words[index + 1]} />
        <span> </span>
        <Word word={words[index + 2]}/>
      </p>
  </div>
);

export default Line;
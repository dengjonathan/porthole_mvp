import React from 'react';
import {connect} from 'react-redux';
import {List} from 'immutable';

import Word from './Word';
import CurrentWord from './CurrentWord';
import store from '../store/store';

const Line = ({index, article, currentArticle}) => {
  const words = article.text.split(' ');
  return (
  <div>
    <Word word={words[index-1]}/>
    <span> </span>
    <CurrentWord word={words[index]} />
    <span> </span>
    <Word word={words[index + 1]} />
   </div>
)};

const mapStateToProps = state => ({
  index: state.get('currentIndex'),
  article: state.get('articles').get(state.get('currentArticle'))
});

const LineContainer = connect(mapStateToProps)(Line);

export default LineContainer;
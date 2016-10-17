import React from 'react';
import {connect} from 'react-redux';

import Word from './Word';
import CurrentWord from './CurrentWord';
import store from '../store/store';

const Line = ({index, article}) => (
  <div>
    <Word word={article[index-1]}/>
    <span> </span>
    <CurrentWord word={article[index]} />
    <span> </span>
    <Word word={article[index + 1]} />
   </div>
);

const mapStateToProps = state => ({
  index: state.get('currentIndex'),
  article: state.getIn('articles', state.get('currentArticle'))
});

const LineContainer = connect(mapStateToProps)(Line);

export default LineContainer;
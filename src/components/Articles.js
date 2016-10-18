import React, {Component} from 'react';
import {connect} from 'react-redux';

import store from '../store/store';

import Article from './Article';

class Articles extends Component {
  render() {
    return(
      <div>
        Articles go here
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentArticle: state.get('currentArticle'),
  articles: state.get('articles')
});

const ArticlesContainer = connect(mapStateToProps)(Articles);

export default ArticlesContainer;
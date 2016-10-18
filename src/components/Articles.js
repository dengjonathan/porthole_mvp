import React, {Component} from 'react';
import {connect} from 'react-redux';

import store from '../store/store';

import Article from './Article';

class Articles extends Component {

  changeArticle() {

  }

  render() {
    const articles = this.props.articles
      .slice(0, 3)
      .map((article, index) => (<Article
        article={article}
        index={index}
        onClick={this.changeArticle.bind(this)}
      />));

    return(
      <div className="articles">
        {articles}
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
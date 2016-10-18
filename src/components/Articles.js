import React, {Component} from 'react';
import {connect} from 'react-redux';

import store from '../store/store';
import {getNYT} from '../utils/utils';

import Article from './Article';

class Articles extends Component {

  componentDidMount() {
    this.getArticles();
  }

  getArticles() {
    getNYT()
      .then(articles => store.dispatch({type: 'LOAD_ARTICLES', articles: articles}))
  }

  changeArticle(index) {
    store.dispatch({type: 'CHANGE_ARTICLE', index: index});
  }

  render() {
    const articles = this.props.articles
      .slice(0, 10)
      .map((article, index) => (<Article
        key={index}
        article={article}
        index={index}
        onClick={this.changeArticle}
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
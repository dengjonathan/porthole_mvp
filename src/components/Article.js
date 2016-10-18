import React, {Image} from 'react';

import '../assets/Article.css';

const Article = ({article, index, onClick}) => (
  //TODO: figure out how to pass in the current article as argument
  <div className="article" onClick={onClick.bind(null, index)}>
    <h3>{article.title}</h3>
    <img src={article.pic} alt={article.pic} />
    <h4>{article.byline}</h4>
    <h4><a href="{article.url}">{article.url}</a></h4>
    <p>{article.text}</p>
  </div>
);

export default Article;

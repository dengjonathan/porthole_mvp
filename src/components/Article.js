import React from 'react';

const Article = ({article, onClick}) => (
  //TODO: figure out how to pass in the current article as argument
  <div className="article" onClick={onClick}>
    <h3>{article.title}</h3>
    <p>{article.text}</p>
  </div>
);

export default Article;

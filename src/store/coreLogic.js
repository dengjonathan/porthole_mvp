import {List, Map} from 'immutable';
import * as Promise from 'bluebird';

//FIXME: for some reason readFile in certain cricumstances is undefined
// import {readFile} from 'fs';
// const readFileAsync = Promise.promisify(readFile);

//stub to rebuild when actually getting articles from database
// export function getArticles () {
//   return readFileAsync('../../articles.json');
//};

export function nextWord(state) {
  const currentIndex = state.get('currentIndex');
  return state.set('currentIndex', currentIndex + 1);
}

export function changeArticle(state, index) {
  return state.set('currentArticle', index)
    .set('currentIndex', 0);
}

export function loadArticles(state, articles) {
  return state.set('articles', List(articles));
};

export function pause(state) {
  return state.set('paused', true);
}

export function unPause(state) {
  return state.set('paused', false);
}

export function setIndex(state, index) {
  return state.set('currentIndex', index);
}

export function changeSpeed(state, speed) {
  return state.set('speed', speed);
}

export function toggleLike(state) {
  const current = state.get('currentArticle');
  const article = state.getIn(['articles', current]);
  article.liked =  article.liked ? false : true;
  return state.setIn(['articles', current], article);
}

export function toggleUnLike(state) {
  const current = state.get('currentArticle');
  const article = state.getIn(['articles', current]);
  article.unLiked =  article.unLiked ? false : true;
  return state.setIn(['articles', current], article);
}
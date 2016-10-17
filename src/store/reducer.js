import {INITIAL_STATE} from '../../INITIAL_STATE';
import {nextWord, changeArticle, loadArticles} from './coreLogic';

export default function reducer (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'NEXT_WORD':
      return nextWord(state);
    case 'CHANGE_ARTICLE':
      return changeArticle(state, action.index);
    case 'LOAD_ARTICLES':
      return loadArticles(state, action.articles);
  }
  console.warn('Action type not found- check your action.type in dispatch');
  return state;
}

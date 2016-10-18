import {INITIAL_STATE} from '../INITIAL_STATE';
import {nextWord, changeArticle, loadArticles, pause, unPause} from './coreLogic';

export default function reducer (state = INITIAL_STATE, action) {
  console.log(action.type);
  switch(action.type) {
    case 'NEXT_WORD':
      return nextWord(state);
    case 'CHANGE_ARTICLE':
      return changeArticle(state, action.index);
    case 'LOAD_ARTICLES':
      return loadArticles(state, action.articles);
    case 'PAUSE':
      return pause(state);
    case 'UNPAUSE':
      return unPause(state);
  }
  console.warn('Action type not found- check your action.type in dispatch');
  return state;
}

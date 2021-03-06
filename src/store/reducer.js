import {INITIAL_STATE} from '../INITIAL_STATE';
import {nextWord, changeArticle, loadArticles, pause, unPause, setIndex, toggleLike, toggleUnLike, changeSpeed} from './coreLogic';

export default function reducer (state = INITIAL_STATE, action) {
  console.log(action.type);
  console.log(action);
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
    case 'SET_INDEX_0':
      return setIndex(state, 0);
    case 'TOGGLE_LIKE':
      return toggleLike(state);
    case 'TOGGLE_UNLIKE':
      return toggleUnLike(state);
    case 'CHANGE_SPEED':
      return changeSpeed(state, action.speed);
  }
  console.warn('Action type not found- check your action.type in dispatch');
  return state;
}

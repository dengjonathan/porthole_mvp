import {List, Map} from 'immutable';
import {expect} from 'chai';
import './test_helper';

import {nextWord, changeArticle} from '../src/store/coreLogic';

describe('Redux store core logic', () => {

  describe('nextWord', () => {
    it('should increment the index by 1', () => {
      const state = Map({
        currentIndex: 0
      });
      const nextState = Map({
        currentIndex: 1
      })
      expect(nextWord(state)).to.equal(nextState);
    });
  });

  describe('changeArticle', ()=> {
    it('should change article based on argument index', ()=> {
      const state = Map({
        currentIndex: 0,
        articleIndex: 0
      });
      const nextState = Map({
        currentIndex: 0,
        articleIndex: 2
      });
      expect(changeArticle(state, 2)).to.equal(nextState);
    });
  })

});
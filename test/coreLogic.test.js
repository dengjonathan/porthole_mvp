import {List, Map} from 'immutable';
import {expect} from 'chai';
import './test_helper';

import {nextWord, changeArticle, loadArticles, getArticles} from '../src/store/coreLogic';

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
  });

  describe('loadArticles', () => {
    it('should load articles into state', () => {
      const state = Map();
      const articles = [{
        "title": "Major Attack on ISIS Starts in Iraq; ‘Decisive Moment’ Seen",
        "text": "Kurdish forces advanced on villages near Mosul, the start of a campaign to reclaim Iraq’s second-largest city from Islamic State militants who seized it more than two years ago. U.S. warplanes are providing air support for the operation, which could take months and involve nearly 30,000 Iraqi and Kurdish troops."
        },{
        "title": "Taunting Trump, Clinton Pushes Her Way Into Red States",
        "text": "Hillary Clinton hopes to extend her edge over Mr. Trump and help down-ballot Democrats in what party leaders increasingly see as a potential wave election."
      }];
      const nextState = Map({
        articles: List.of(articles)
      });
      expect(loadArticles(state, articles)).to.equal(nextState);
    });
  });

  describe('load articles works with Async requests', () => {
    let state = Map();
    const articles = [{
      "title": "Major Attack on ISIS Starts in Iraq; ‘Decisive Moment’ Seen",
      "text": "Kurdish forces advanced on villages near Mosul, the start of a campaign to reclaim Iraq’s second-largest city from Islamic State militants who seized it more than two years ago. U.S. warplanes are providing air support for the operation, which could take months and involve nearly 30,000 Iraqi and Kurdish troops."
      },{
      "title": "Taunting Trump, Clinton Pushes Her Way Into Red States",
      "text": "Hillary Clinton hopes to extend her edge over Mr. Trump and help down-ballot Democrats in what party leaders increasingly see as a potential wave election."
    }];
    const nextState = Map({
      articles: List.of(articles)
    });
    getArticles().then(articles => {
      state = loadArticles(state, JSON.parse(articles));
    });
    setTimeout(() => expect(state).to.equal(nextState), 200);
  });

});
import {List, Map} from 'immutable';
import {expect} from 'chai';
import './test_helper';

import reducer from '../src/store/reducer';

describe('reducer', () => {

  it('can receive an action return new state', () => {
      const articles = [{
        "title": "Major Attack on ISIS Starts in Iraq; ‘Decisive Moment’ Seen",
        "text": "Kurdish forces advanced on villages near Mosul, the start of a campaign to reclaim Iraq’s second-largest city from Islamic State militants who seized it more than two years ago. U.S. warplanes are providing air support for the operation, which could take months and involve nearly 30,000 Iraqi and Kurdish troops."
        },{
        "title": "Taunting Trump, Clinton Pushes Her Way Into Red States",
        "text": "Hillary Clinton hopes to extend her edge over Mr. Trump and help down-ballot Democrats in what party leaders increasingly see as a potential wave election."
      }];
      const nextState = Map({
        articles: List.of(articles),
        currentIndex: 0,
        currentArticle: null
      });
      expect(reducer(undefined, {type: 'LOAD_ARTICLES', articles: articles})).to.equal(nextState);
  });

});
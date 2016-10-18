import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List} from 'immutable';

import Line from './Line';
import store from '../store/store';

class Porthole extends Component {

  constructor(props) {
    super(props)
  }

  onPlay() {
    store.dispatch({type: 'UNPAUSE'});
    this.playArticle.call(this);
  }

  onPause () {
    store.dispatch({type: 'PAUSE'});
  }

  playArticle () {
    const state = store.getState();
    const index = state.get('currentIndex');
    const articleIndex = state.get('currentArticle');
    const article = state.get('articles').get(articleIndex);
    if (index < article.text.length && !state.get('paused')) {
      setTimeout(() => {
        store.dispatch({type: 'NEXT_WORD'});
        this.playArticle.call(this);
      }, state.get('speed'));
    }
  }

  render() {
    const words = this.props.article.text.split(' ');
    const index = this.props.index;
    return (
      <div>
        <Line index={index} words={words} />
        <button onClick={this.onPlay.bind(this)}>▶ Play</button>
        <button onClick={this.onPause.bind(this)}>⏸ Pause</button>
     </div>
    );
  }
}

const mapStateToProps = state => ({
  index: state.get('currentIndex'),
  article: state.get('articles').get(state.get('currentArticle'))
});

const PortholeContainer = connect(mapStateToProps)(Porthole);

export default PortholeContainer;
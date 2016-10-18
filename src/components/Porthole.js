import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List} from 'immutable';

import Line from './Line';
import Buttons from './Buttons';
import store from '../store/store';

class Porthole extends Component {

  constructor(props) {
    super(props);
    Object.defineProperty(this, 'article', {
      get: () => this.props.articles.get(this.props.currentArticle)
    })
  }

  onPlay() {
    //FIXME: play is being kind of wonky;
    store.dispatch({type: 'UNPAUSE'});
    this.playArticle.call(this);
  }

  onPause () {
    store.dispatch({type: 'PAUSE'});
  }

  playArticle () {
    if (this.props.index < this.article.text.length && !this.props.paused) {
      setTimeout(() => {
        store.dispatch({type: 'NEXT_WORD'});
        this.playArticle.call(this);
      }, this.props.speed);
    }
  }

  render() {
    const title = this.article.title;
    const words = this.article.text.split(' ');
    const index = this.props.index;
    return (
      <div>
        <h3>{title}</h3>
        <Line index={index} words={words} />
        <button onClick={this.onPlay.bind(this)}>▶ Play</button>
        <button onClick={this.onPause.bind(this)}>⏸ Pause</button>
        <Buttons />
     </div>
    );
  }
}

const mapStateToProps = state => ({
  index: state.get('currentIndex'),
  currentArticle: state.get('currentArticle'),
  articles: state.get('articles'),
  paused: state.get('paused'),
  speed: state.get('speed')
});

const PortholeContainer = connect(mapStateToProps)(Porthole);

export default PortholeContainer;

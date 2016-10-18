import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List} from 'immutable';

import Line from './Line';
import Buttons from './Buttons';
import Summary from './summary';
import store from '../store/store';

import '../assets/Porthole.css';

class Porthole extends Component {

  constructor(props) {
    super(props);
    Object.defineProperty(this, 'article', {
      get: () => this.props.articles.get(this.props.currentArticle)
    })
  }

  onPlay() {
    store.dispatch({type: 'UNPAUSE'});
    this.playArticle.call(this);
  }

  onPause () {
    store.dispatch({type: 'PAUSE'});
  }

  playArticle () {
    if (this.props.index < this.article.text.length && !this.props.paused) {
      store.dispatch({type: 'NEXT_WORD'});
      setTimeout(() => {
        this.playArticle.call(this);
      }, this.props.speed);
    } else if (this.props.index >= this.article.text.length) {
      this.onPause();
    }
  }

  goToBeginning () {
    store.dispatch({type: 'SET_INDEX_0'});
  }

  toggleLike() {
    store.dispatch({type: 'TOGGLE_LIKE'})
  }

  toggleUnLike () {
    store.dispatch({type: 'TOGGLE_UNLIKE'})
  }

  changeSpeed (wpm) {
    const speed = 60 * 1000 / wpm; //convert words per minute to delay time in ms
    store.dispatch({type: 'CHANGE_SPEED', speed: speed})
  }

  render() {
    const title = this.article.title;
    const words = this.article.text.split(' ');
    const index = this.props.index;
    return (
      <div className="porthole">
        <Line index={index} words={words} />
        <button onClick={this.onPlay.bind(this)}>▶ Play</button>
        <button onClick={this.onPause.bind(this)}>⏸ Pause</button>
        <button onClick={this.goToBeginning}>Go To Beginning</button>
        <Buttons
          liked={!!this.article.liked}
          unLiked={!!this.article.unLiked}
          toggleLike={this.toggleLike}
          toggleUnLike={this.toggleUnLike}
          changeSpeed={this.changeSpeed}
        />
        <h3>{title}</h3>
        <h4>{this.article.byline}</h4>
        <h4>{this.article.url}</h4>
        <Summary text={this.article.text} index={index}/>

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

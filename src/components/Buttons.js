import React from 'react';

import '../assets/Button.css';

const Buttons = ({toggleLike, toggleUnLike, liked, unLiked, changeSpeed}) => (
  <div className="button">
    <button
      className={liked ? 'selected' : null}
      onClick={toggleLike}
    >👍</button>
    <button onClick={toggleUnLike}>👎</button>
    <button onClick={changeSpeed.bind(null, 150)}>150 wpm</button>
    <button onClick={changeSpeed.bind(null, 300)}>300 wpm</button>
    <button onClick={changeSpeed.bind(null, 600)}>600 wpm</button>
  </div>
)

export default Buttons;
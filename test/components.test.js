import React from 'react';
import ReactDOM from 'react-dom';
import Word from '../src/components/Word';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Word word='test' />, div);
});

//TODO how do you test this in create react app?
it('displays a word passed as a prop', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Word word='test' />, div);
  expect(div)
});

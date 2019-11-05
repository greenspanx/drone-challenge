import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('test fake component', () => {
  const result = true;
  expect(result).toBeTruthy();
});

it('test fake component', () => {
  const result = true;
  expect(result).toBeTruthy();
});

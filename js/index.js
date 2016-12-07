require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Container from './components/container';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Container />,
    document.getElementById('app')
  );
});

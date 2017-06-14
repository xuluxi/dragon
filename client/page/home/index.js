import Counter from './main.jsx';
import Alert from './alert.jsx';
import React from 'react';
import { render } from 'react-dom';

function load() {
  window.onload = function() {
    render(<Counter />, document.getElementById('content'))
    render(<Alert content="hello"/>, document.getElementById('alert'));
  }
}
load();

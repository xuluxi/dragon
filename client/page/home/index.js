import App from './components/App.js';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { initProducts } from './actions'
import './main.scss';

function load() {
  window.onload = function() {
  	let store = createStore(reducer);
  	store.dispatch(initProducts())
    render(
    	<Provider store={store}>
    		<App/>
    	</Provider>
    , document.getElementById('root'))
  }

  const Foo = {
  	foo() {
  		console.log('foo fn called')
  	}
  }

  const Show = {
  	show() {
  		console.log('show method called!')
  	}
  }

  @test(Foo, Show)
  class Persion{

  }

  function test(...props) {
  	return function(target) {
  		Object.assign(target.prototype, ...props)
  	}
  }

  const p = new Persion();

  p.foo();
  p.show();

}
load();
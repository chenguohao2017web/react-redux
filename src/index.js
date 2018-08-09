import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import { createStore, combineReducers } from 'redux'
import { INCREMENT, DECREMENT } from './actions'
import { Provider } from 'react-redux'
import { Object } from 'core-js';

const city = (state = { cityName: '广州' }, action) => {
  switch (action.type) {
    case 'changeName':
      return Object.assign({}, state, { cityName: action.cityName })
    default:
      return state
  }
}
const count = (state = { value: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { value: state.value + 1 })
    case DECREMENT:
      return Object.assign({}, state, { value: state.value - 1 })
    default:
      return state
  }
}

const reducers = combineReducers({ count, city })
let store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

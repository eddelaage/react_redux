import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from 'redux-logger'

import App from './app/containers/App'


// Apprentissage sur la base du site : https://www.youtube.com/watch?v=ZKCYqJu4n3s&list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_&index=3


//Une fois l’action “ dispatchée “, nous avons besoin de fonctions qui écoutent les actions et modifient le state en conséquence.
// Ce sont les reducers.
// Chaque reducer prend en charge une partie du state. Un reducer a pour but de décrire le state initial et de retourner le nouveau state pour les différents types d’actions qu’il prend en charge :
// https://gkueny.fr/react-lecon-4
const mathReducer = (state = {
  result: 1,
  lastValue: []
}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValue: [...state.lastValue, action.payload]
      }
      break;
    case "SUBSTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValue: [...state.lastValue, action.payload]
      }

      break;
    default:
      return state;
  }
  return state;
}

const userReducer = (state = {
  name: "max",
  age: 27
}, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      }
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      }

      break;
    default:
      return state;
  }
  return state;
}

const store = createStore(
  combineReducers({math: mathReducer, user: userReducer,}),
  {},
  applyMiddleware(logger)
)

store.subscribe(() => {
  // console.log("Store updated : ", store.getState())
})


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import { createStore, combineReducers } from "redux"



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

const store = createStore(combineReducers({
  mathReducer,
  userReducer
}))

store.subscribe(() => {
  console.log("Store updated : ", store.getState())
})

store.dispatch({
  type: "ADD",
  payload: 100
})

store.dispatch({
  type: "ADD",
  payload: 22
})

store.dispatch({
  type: "SUBSTRACT",
  payload: 80
})

store.dispatch({
  type: "SET_AGE",
  payload: 24
})

store.dispatch({
  type: "SET_NAME",
  payload: "Paul"
})
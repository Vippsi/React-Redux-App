import React from 'react';
import logo from './logo.svg';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { reducer } from './reducers/reducer'

import DogForm from './components/DogForm'
import DogList from './components/DogList'
import './App.css';



const store = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>The Dog Getter</h1>
     <DogForm/>
     <DogList/>
    </div>
    </Provider>
  );
}

export default App;

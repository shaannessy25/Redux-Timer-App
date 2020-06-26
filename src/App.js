import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import './App.css';

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro"> Timerz </p>
        </div>
      </Provider>
    )
  }
}

export default App;

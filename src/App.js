import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { update } from './actions'
import reducers from './reducers';
import throttle from 'lodash/throttle'
import { loadState, saveState } from './utils'
import './App.css';

[bold]import NewTimer from './components/new-timer'[/bold]
[bold]import ListTimers from './components/list-timers'[/bold]

const store = createStore(reducers);

let lastUpdateTime = Date.now()
setInterval(() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now
  store.dispatch(update(deltaTime))
}, 50)

const persistedState = loadState()
const store = createStore(reducers, persistedState)
store.subscribe(() => {
  saveState(store.getState())
}, 1000));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
[bold]            <NewTimer />[/bold]
[bold]            <ListTimers />[/bold]         
        </div>
      </Provider>
    )
  }
}

export default App;

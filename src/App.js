import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import './App.css';

[bold]import NewTimer from './components/new-timer'[/bold]
[bold]import ListTimers from './components/list-timers'[/bold]

const store = createStore(reducers);

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

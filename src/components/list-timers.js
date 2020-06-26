import React, { Component } from 'react';
import TimerView from './timer-view'

class ListTimers extends Component {

  render() {
    return (
      <div>
        {this.props.timers.map((timer, i) => <TimerView key={i} timer={timer} index={i} />)}
      </div>
    )
  }
}


export default ListTimers;
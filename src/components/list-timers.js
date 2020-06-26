import React, { Component } from 'react';
import { connect } from 'react-redux'
import TimerView from './timer-view'
import { selectTimer } from '../actions'

class ListTimers extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.timers.map((timer, i) => <TimerView key={i} timer={timer} index={i} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { timers: state.timers }
}

const mapDispatchToProps = () => {
  return { selectTimer }
}

export default connect(mapStateToProps, mapDispatchToProps())(ListTimers)
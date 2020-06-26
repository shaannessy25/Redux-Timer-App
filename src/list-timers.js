import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectTimer } from '../actions'

class ListTimers extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.timers.map((timer, i) => {
         // Here the render method maps `this.props.timers` to:
          return (
            <div>
              <h2>{timer.name}</h2>
              <h1>{timer.time}</h1>
              <button>Start</button>
            </div>
          )
        })}
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
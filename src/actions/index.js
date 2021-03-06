import { combineReducers } from 'redux';

import timerReducer from '../reducers/timers-reducer'
import selectTimerReducer from '../reducers/select-timer-reducer'


export const NEW_TIMER = "NEW_TIMER"
export const TOGGLE_TIMER = "TOGGLE_TIMER"
export const SELECT_TIMER = "SELECT_TIMER"
export const UPDATE = "UPDATE"


export const update = (deltaTime) => {
  return {
    type: UPDATE,
    payload: { deltaTime }
  }
}

export default combineReducers({
    timers: timerReducer,             
    selectedTimer: selectTimerReducer, 
  });

export const addTimer = (name) => {
    return {
        type: NEW_TIMER,
        payload: { name }
    }
}


export const toggleTimer = (index) => {
    return {
      type: TOGGLE_TIMER,
      payload: { index }
    }
  }


  export const selectTimer = (index) => {
    return {
      type: SELECT_TIMER,
      payload: { index }
    }
  }
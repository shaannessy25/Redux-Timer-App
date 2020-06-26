import { SELECT_TIMER } from '../actions';


const selectTimerReducer = (state =  null, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SELECT_TIMER:
            return state = action.payload.index;
        
        default:
            return state;
    }
}



export default selectTimerReducer;

import { COUNT_ADD,COUNT_DECREASE } from "./action-type";
import { combineReducers } from "../libs/redux/redux";

const inintCount=0
  function countReducer(state=inintCount,action){
    console.log('state',state,action)
    switch(action.type){
       case COUNT_ADD:
           return state+action.data
           case COUNT_DECREASE:
            return state-action.data
        default:
            return state
    }
}

  export default combineReducers({
      countReducer
  })
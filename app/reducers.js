import { SELECT } from './actions'
import {combineReducers } from 'redux'
import createReducer from './util/createReducer'
import _ from 'lodash'

export const selections = createReducer({}, {

  [ SELECT ]: (state, action) => {
    const { key, value, selections } = action
    if (selections) {
      return {
        ...state,
        ...selections
      }

    } else {
      if (_.isEqual(state[key], value)) {
        return state
      }
      return {
        ...state,
        [ key ]: value
      }
    }
  }
})

export default combineReducers({
  selections
})
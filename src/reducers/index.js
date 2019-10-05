import personalsReducer from './personals'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  personalsReducer
})

export default allReducers

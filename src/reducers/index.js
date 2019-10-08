import personalsReducer from './personals'
import filtersMyReducer from './filtersMy'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  personalsReducer,
  filtersMyReducer
})

export default allReducers

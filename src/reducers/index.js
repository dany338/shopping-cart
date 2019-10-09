import personalsReducer from './personals'
import filtersMyReducer from './filtersMy'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  personalsReducer: personalsReducer,
  filtersMyReducer: filtersMyReducer,
})

export default allReducers

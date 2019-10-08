import * as filtersMyActions from '../actions';

export const setFiltersQueryRequest = (name, value) => {
  return async (dispatch) => {
    try {
      dispatch(filtersMyActions.setSelectedFilter(name, value))
    } catch (error) {
      console.log(error.message)
    }
  }
}

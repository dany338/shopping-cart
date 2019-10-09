import * as filtersMyTypes from '../typeActions';

export const setSelectedFilter = (name, value) => {
  return {
    type: filtersMyTypes.SET_SELECTED_FILTERS_MY,
    payload: { name, value },
  }
}

import * as filtersMyTypes from '../typesActions';

const INITIAL_STATE = {
  filter: {
    query: ''
  }
}

const filtersMyReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case filtersMyTypes.SET_SELECTED_FILTERS_MY: {
      const { name, value } = payload

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value
        },
      }
    }

    default: {
      return state;
    }
  }
};

export default filtersMyReducer;

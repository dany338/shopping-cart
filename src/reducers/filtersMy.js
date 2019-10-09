import * as filtersMyTypes from '../typeActions';

const INITIAL_STATE = {
  filter: {
    query: 'Bought'
  }
}

const filtersMyReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case filtersMyTypes.SET_SELECTED_FILTERS_MY: {
      const { name, value } = payload

      return {
        ...state,
        filter: {
          ...state.filter,
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

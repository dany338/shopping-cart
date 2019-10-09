import * as PersonalTypes from '../typeActions';

const INITIAL_STATE = {
  data: {
    fullname: '',
    bought: [],
    pending: [],
    unpaid: [],
  },
  loading: false,
  error: false,
}

const personalsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PersonalTypes.FETCHING_MYINFORMATION_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }

    case PersonalTypes.FETCHING_MYINFORMATION_SUCCESS: {
      const { data } = payload
      return {
        ...state,
        data,
        loading: false,
      }
    }

    case PersonalTypes.FETCHING_MYINFORMATION_FAILURE: {
      const { error } = payload

      return {
        ...state,
        error,
        loading: false,
      }
    }

    default: {
      return state;
    }
  }
};

export default personalsReducer;

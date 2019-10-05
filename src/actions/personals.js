import * as PersonalTypes from '../typesActions';

export const fetchMyInformationRequest = () => {
  return {
    type: PersonalTypes.FETCHING_MYINFORMATION_REQUEST,
  }
}

export const fetchMyInformationSuccess = data => {
  return {
    type: PersonalTypes.FETCHING_MYINFORMATION_SUCCESS,
    payload: { data },
  }
}

export const fetchMyInformationFailure = error => {
  return {
    type: PersonalTypes.FETCHING_MYINFORMATION_FAILURE,
    payload: { error },
  }
}

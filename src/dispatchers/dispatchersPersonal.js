import * as PersonalActions from '../actions';
import * as PersonalServices from '../services';

export const getMyInformationRequest = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(PersonalActions.fetchMyInformationRequest())
      const data = await PersonalServices.apiPersonal.getMyInformation()
      dispatch(PersonalActions.fetchMyInformationSuccess(data))
      const state = getState();
    } catch (error) {
      dispatch(PersonalActions.fetchMyInformationFailure(error.message))
    }
  }
}

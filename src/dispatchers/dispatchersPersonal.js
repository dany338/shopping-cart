import * as PersonalActions from '../actions';
import * as PersonalServices from '../services';

export const getMyInformationRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(PersonalActions.fetchMyInformationRequest())
      const data = await PersonalServices.apiPersonal.getMyInformation()
      dispatch(PersonalActions.fetchMyInformationSuccess(data))
    } catch (error) {
      dispatch(PersonalActions.fetchMyInformationFailure(error.message))
    }
  }
}

import { SEND_EMAIL, COMPLETE_AND_RETURN } from '../constants/email';

const initialState = {
  loading: false,
  error: null,
  successfullySent: false,
};

const emailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_EMAIL.START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SEND_EMAIL.SUCCEED:
      return {
        ...state,
        loading: false,
        error: null,
        successfullySent: true,
      };

    case SEND_EMAIL.FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case COMPLETE_AND_RETURN:
      return initialState;

    default:
      return state;
  }
};

export default emailReducer;

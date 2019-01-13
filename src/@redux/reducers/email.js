import { SEND_EMAIL } from '../constants/email';

const initialState = {
  loading: false,
  error: null,
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
      };

    case SEND_EMAIL.FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default emailReducer;

import { SEND_EMAIL, COMPLETE_AND_RETURN } from '../constants/email';

const startSendEmail = payload => ({
  type: SEND_EMAIL.START,
  payload,
});

const succeedSendEmail = payload => ({
  type: SEND_EMAIL.SUCCEED,
  payload,
});

const failSendEmail = payload => ({
  type: SEND_EMAIL.FAIL,
  payload,
});

const completeAndReturn = () => ({ type: COMPLETE_AND_RETURN });

export { startSendEmail, succeedSendEmail, failSendEmail, completeAndReturn };

import { SEND_EMAIL } from '../constants/email';

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

export { startSendEmail, succeedSendEmail, failSendEmail };

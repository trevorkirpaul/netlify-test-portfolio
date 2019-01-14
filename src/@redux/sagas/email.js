import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import { succeedSendEmail, failSendEmail } from '../actions/email';
import { SEND_EMAIL } from '../constants/email';

// workers
function* sendEmail({ payload }) {
  const CMS_URI = process.env.REACT_APP_CMS_URI;

  const URI = `${CMS_URI}/email`;

  const requestShape = {
    from: payload.email,
    to: process.env.REACT_APP_EMAIL,
    reply_to: process.env.REACT_APP_EMAIL,
    subject: `FROM PORTFOLIO PIKACHU ${payload.subject}`,
    text: payload.body,
    // html: '<h1>Lorem ipsum</h1>',
  };

  try {
    const { data } = yield call(axios.post, URI, requestShape);

    yield put(succeedSendEmail(data));
  } catch (error) {
    yield put(failSendEmail(error));
  }
}

// watchers

function* startSendEmail() {
  yield takeLatest(SEND_EMAIL.START, sendEmail);
}

export { startSendEmail };

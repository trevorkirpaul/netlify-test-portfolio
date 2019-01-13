import { all } from 'redux-saga/effects';

import { startFetchAllBlogs } from './blogs';
import { startSendEmail } from './emal';

function* rootSaga() {
  yield all([startFetchAllBlogs(), startSendEmail()]);
}
export default rootSaga;

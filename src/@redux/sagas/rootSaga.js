import { all } from 'redux-saga/effects';

import { startFetchAllBlogs } from './blogs';

function* rootSaga() {
  yield all([startFetchAllBlogs()]);
}
export default rootSaga;

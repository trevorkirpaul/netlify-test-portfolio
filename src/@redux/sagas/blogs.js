import { takeLatest, put } from 'redux-saga/effects';

import { FETCH_ALL_BLOGS } from '../constants/blogs';
import * as blogsActions from '../actions/blogs.js';

//workers
function* fetchAllBlogs() {
  try {
    yield put(blogsActions.succeedFetchAllBlogs());
  } catch (error) {
    yield put(blogsActions.failFetchAllBlogs());
  }
}

//watchers
function* startFetchAllBlogs() {
  yield takeLatest(FETCH_ALL_BLOGS.START, fetchAllBlogs);
}

export { startFetchAllBlogs };

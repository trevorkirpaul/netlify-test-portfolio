import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import { FETCH_ALL_BLOGS } from '../constants/blogs';
import * as blogsActions from '../actions/blogs';

//workers
function* fetchAllBlogs() {
  const CMS_URI = process.env.REACT_APP_CMS_URI;
  const sortByCreatedDesc = '?_sort=createdAt:desc';

  const URI = `${CMS_URI}/posts${sortByCreatedDesc}`;
  try {
    const { data } = yield call(axios.get, URI);
    yield put(blogsActions.succeedFetchAllBlogs(data));
  } catch (error) {
    yield put(blogsActions.failFetchAllBlogs(error));
  }
}

//watchers
function* startFetchAllBlogs() {
  yield takeLatest(FETCH_ALL_BLOGS.START, fetchAllBlogs);
}

export { startFetchAllBlogs };

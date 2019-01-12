import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import { FETCH_ALL_BLOGS } from '../constants/blogs';
import * as blogsActions from '../actions/blogs.js';

//workers
function* fetchAllBlogs() {
  const CMS_URI = process.env.REACT_APP_CMS_URI;
  const CMS_TOKEN = process.env.REACT_APP_CMS_TOKEN;

  const URI = `${CMS_URI}/posts`;
  try {
    const { data } = yield call(axios.get, URI, {
      headers: {
        Authorization: `Bearer ${CMS_TOKEN}`,
      },
    });
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

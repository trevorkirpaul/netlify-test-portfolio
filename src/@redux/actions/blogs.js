import { FETCH_ALL_BLOGS } from '../constants/blogs';

const startFetchAllBlogs = () => ({
  type: FETCH_ALL_BLOGS.START,
});

const succeedFetchAllBlogs = payload => ({
  type: FETCH_ALL_BLOGS.SUCCEED,
  payload,
});

const failFetchAllBlogs = payload => ({
  type: FETCH_ALL_BLOGS.FAIL,
  payload,
});

export { startFetchAllBlogs, succeedFetchAllBlogs, failFetchAllBlogs };

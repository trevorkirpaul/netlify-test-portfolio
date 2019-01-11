import { FETCH_ALL_BLOGS } from '../constants/blogs';

const startFetchAllBlogs = () => ({
  type: FETCH_ALL_BLOGS.START,
});

const succeedFetchAllBlogs = () => ({
  type: FETCH_ALL_BLOGS.SUCCEED,
});

const failFetchAllBlogs = () => ({
  type: FETCH_ALL_BLOGS.FAIL,
});

export { startFetchAllBlogs, succeedFetchAllBlogs, failFetchAllBlogs };

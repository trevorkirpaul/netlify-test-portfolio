import { FETCH_ALL_BLOGS } from '../constants/blogs';

const initialState = {
  lodaing: false,
  error: null,
  allBlogs: [],
};

const blogsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_BLOGS.START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    default:
      return state;
  }
};

export default blogsReducer;

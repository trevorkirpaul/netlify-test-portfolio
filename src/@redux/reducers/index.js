import { combineReducers } from 'redux';

import blogsReducer from './blogs';

const rootReducer = combineReducers({
  blogs: blogsReducer,
});

export default rootReducer;

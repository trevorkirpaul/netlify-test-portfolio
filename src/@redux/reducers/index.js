import { combineReducers } from 'redux';

import blogsReducer from './blogs';
import emailReducer from './email';

const rootReducer = combineReducers({
  blogs: blogsReducer,
  email: emailReducer,
});

export default rootReducer;

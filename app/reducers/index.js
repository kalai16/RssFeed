import { combineReducers } from 'redux';
import navReducer from './NavReducer';
import rssFeedReducer from './RssFeedReducer';


const rootReducer = combineReducers({
  nav: navReducer,
  rssFeed: rssFeedReducer,
});

export default rootReducer;

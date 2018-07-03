import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;


// state for this app: just an object of all the posts, then when we want to show a certain post on the show page, we can just grab the id for the current url from that list (so we don't need the other bit of state that we might've had in a previous app for 'active post' - not needed now that we have routes.)
// use object rather than list so that we can put the ids as the key for each object within the object, making indiv. posts easier to find, and not needing to do a for loop or anything.

// redux-form - don't need to handleinput, setstate or any of that. it handles many things for us
// including automatically handling changes by the user

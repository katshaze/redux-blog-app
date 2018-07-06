import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
  case DELETE_POST:
    return _.omit(state, action.payload);
  case FETCH_POST:
    // const post = action.payload.data;
    // const newState = { ...state };
    // newState[post.id] = post;
    // return newState;
    return { ...state, [action.payload.data.id]: action.payload.data };
  case FETCH_POSTS:
    return _.mapKeys(action.payload.data, 'id');
  default:
    return state;
  }
}

// using lodash's _.mapKeys() method (which takes an array and the property that we want to be used as the key in the resulting object) to coerce the array that would have come from the fetch posts action into an object
// practise at stephengrider.github.io/JSPlaygrounds - fancy repl that prints everything, not just the last everything

// for file path for where to get { FETCH_POSTS }, it's not necessary to include index.js

// omit method from lodash library: look at state object. if it has a key of action.payload (i.e. the post's id')
// delete it from the state, and return a new state object without that id in it.
// doesn't modify state object, returns a new state object without the id

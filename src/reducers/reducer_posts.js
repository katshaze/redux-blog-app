import _ from 'lodash';
import { FETCH_POSTS } from '../actions';


export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_POSTS:
    return _.mapKeys(action.paload.data, 'id');
  default:
    return state;
  }
}

// using lodash's _.mapKeys() method (which takes an array and the property that we want to be used as the key in the resulting object) to coerce the array that would have come from the fetch posts action into an object
// practise at stephengrider.github.io/JSPlaygrounds - fancy repl that prints everything, not just the last everything

// for file path for where to get { FETCH_POSTS }, it's not necessary to include index.js

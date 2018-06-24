imoprt axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=SHAZER1234';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);

  return {
    type: FETCH_POSTS
    payload: request
  };
}

// some apis expect that you'll pass along an api unique key for all your request (in this case, the heroku api set up by Grider expects an api key that you can make up but ensure you include in all your requests). the unique key goes as a query, so with a preceing ?

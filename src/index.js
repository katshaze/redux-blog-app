import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container')
)


// Browser Router: want react router to look at the entire url (cf. hash router) when deciding what components to render on the screen. Interacts with that history library from the react router workflow diagram.

// Route component (imported from react-router-dom) is an object that is a react component that we can render inside of any other react component that we put together inside of our app. provides the configuratin of 'if url like x, show y component; if url like z, show a component'. Always must have two properties: a path and a component

// import Swtich from react router dom in order to not have the home route get rendered twice.
// be sure to put the least specific paths (the home path) at the bottom of the list of routes
// inside the switch statement

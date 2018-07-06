import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';


class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      // console.log(post);
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
        {this.renderPosts()}
        </ul>
      </div>
    )
  }
}



function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
// putting {fetchPosts} here is a shortcut for gaining access to this action creator
// now have access to this.props.fetchPosts inside of the component.
// null is for where the match state to props argument would have gone

// re use of componentDidMount(), componentWillMount() is another option,
// but either way the component will try to render
// while the request for data is sent off. as it's all async.

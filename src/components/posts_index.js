import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);

    return (
      <div>
        Posts Index
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

// componentWillMount() is another option, but either way the component will try to render
// while the request for data is sent off. as it's all async.

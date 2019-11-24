import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import {appDataSelector, 
        dataSelector,
        smsSelector,
        smsAndLikeSelector,
        onlyLikeSelector} 
from '../selectors.js';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.results.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.results.map(post => (
      <div key={post.id}>
        <p>Aency:{post.title}</p>
        <p>Platform:{post.body}</p>
        <p>Likes: {post.id} </p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

//Here u can remove any commented part and see the results accordingly
const mapStateToProps = state => ({
  posts:appDataSelector(state),
//  results: dataSelector(state),   
//  results: smsSelector(state), 
//  esults: smsAndLikeSelector(state),
   results: onlyLikeSelector(state), 
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);

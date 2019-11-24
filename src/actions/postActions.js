import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
 // fetch('json/mock.json')
   // .then(res => res.json())
    //.then(posts => console.log(posts))
//      dispatch({
//        type: FETCH_POSTS,
//        payload: posts
//      })
         
   // );
    axios.get('./json/mock.js')
    .then(res=>
          dispatch({
            type: FETCH_POSTS,
            payload: res.data
        }))
          
};

export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

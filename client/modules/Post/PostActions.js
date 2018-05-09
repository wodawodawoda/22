import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';

// Export Actions
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function addPostRequest(post) {
  return (dispatch) => {
    return callApi('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
    }).then(res => dispatch(addPost(res.post)));
  };
}

export function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    return callApi('posts').then(res => {
      dispatch(addPosts(res.posts));
    });
  };
}

export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
  };
}

export function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  };
}

export function deletePostRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)));
  };
}

export function editPost(cuid, post) {
  return {
    type: EDIT_POST,
    cuid,
    post,
  };
}

export function editPostRequest(cuid, post) {
  return (dispatch) => {
    let objToDispatch = {
      post: {
        // If statement prevent object from updating with empty object error
        $inc: { votes: post.votes ? post.votes : 0 },
        name: post.name,
        title: post.title,
        content: post.content,
      },
    };
    if (post.comments) objToDispatch.post.$push = { comments: post.comments[post.comments.length - 1] };
    return callApi(`posts/${cuid}`, 'put', objToDispatch
    ).then(() => dispatch(editPost(cuid, post)));
  };
}

// export function commentPost(cuid, comment) {
//   return {
//     type: EDIT_POST,
//     cuid,
//     comment,
//   };
// }
//
// export function commentPostRequest(cuid, comment) {
//   return (dispatch) => {
//     return callApi(`posts/${cuid}`, 'put', {
//       post: {
//         // If statement prevent object from updating with empty object error
//         $push: {comments: },
//       },
//     }).then(() => dispatch(editPost(cuid, post)));
//   };
// }

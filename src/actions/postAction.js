import {GET_POSTS, REMOVE_POST, UPDATE_POST, UPDATING_POST} from './actionTypes';
import {BASE_URL} from '../const';

export const dispatchGetPosts = (phonesData) => {
    return {
        type: GET_POSTS,
        posts:phonesData
    }
};

export const fetchPosts = (dispatch) => {
    return function (dispatch) {
        fetch(`${BASE_URL}`)
        .then(response => response.json())
        .then(data => dispatch(dispatchGetPosts(data)));
    }
}

export const dispatchDeletePost = (post) => {
    return {
        type: REMOVE_POST,
        post,
    }
};

export const deletePost = (post) => {
    let deleteObj = {
        body:post.body,
        title:post.title,
        userId:post.userId
    }
    return function (dispatch) {
        dispatch({
            type: UPDATING_POST,
            state:true,
            post:post
        })
        fetch(`${BASE_URL}/${post.id}`, {
            method: 'delete',
            body: JSON.stringify(deleteObj),
            headers: {'Content-type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(dispatchDeletePost(post));
        }).catch((err) => {
            handleErrors(err)
        });;
    }
}

export const dispatchupdatePost = (post) => {
    return {
        type: UPDATE_POST,
        post,
    }
};

export const updatePost = (post) => {
    let updateObj = {
        body:post.body,
        title:post.title,
        userId:post.userId
    }
    return function (dispatch) {
        dispatch({
            type: UPDATING_POST,
            state:true,
            post:post
        })
        fetch(`${BASE_URL}/${post.id}`, {
            method: 'PATCH',
            body: JSON.stringify(updateObj),
            headers: {'Content-type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            dispatch(dispatchupdatePost(post));
            dispatch({
                type: UPDATING_POST,
                state:false,
                post:post
            })
        }).catch((err) => {
            handleErrors(err)
        });
    }
}
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

//   export const operateProductToCart = (product, operation) => {
//     return {
//         type: OPERATE_PRODUCT_TO_CART,
//         product,
//         operation,
//     }
//   }
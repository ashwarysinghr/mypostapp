

import {GET_POSTS, REMOVE_POST, UPDATE_POST, UPDATING_POST} from '../actions/actionTypes';

const initialState = {
    posts: [],
    loading:true
};

const postsReducer = (state = initialState, action ) => {
    let posts = [...state.posts], postId, post, postIndex;
    switch (action.type) {
        case GET_POSTS:
            return {...state, posts:action.posts, loading:false}
        case REMOVE_POST:
            postId = action.post.id;
            posts = posts.filter((item) => {
                return item.id !== postId;
            })
            return {...state, posts: posts};
        case UPDATE_POST:
            post = posts.find((post) => {
                return post.id === action.post.id
            })
            postIndex = posts.findIndex((post) => {
                return post.id === action.post.id
            })
            post.body = action.post.body;
            post.title = action.post.title;
            post.updated = true;
            posts[postIndex] = post;
            return {...state, posts:posts};
        case UPDATING_POST:
            post = posts.find((post) => {
                return post.id === action.post.id
            })
            postIndex = posts.findIndex((post) => {
                return post.id === action.post.id
            })
            post.showSpinner = action.state
            posts[postIndex] = post;
            return {...state, posts:posts};
        default:
            return state;
    }
}
export default postsReducer;
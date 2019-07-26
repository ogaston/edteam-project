import { GET_ALL_POSTS, CLOSE_MODAL, SHOW_MODAL } from "../constants";

const makeRequest = ({ hook, method }, dispatch, cb) => {
  return fetch(`https://jsonplaceholder.typicode.com/${hook}`, {
    method
  })
    .then(cb)
    .catch(e => {
      dispatch({
        type: SHOW_MODAL,
        payload: {
          showModal: true,
          modalMsg: `Error: La petición falló - ${e.message}`,
          operationSuccess: false
        }
      });
    });
};

export const closeModal = () => dispatch => {
  dispatch({ type: CLOSE_MODAL, payload: { showModal: false } });
};

export const getPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(response => {
      dispatch({ type: GET_ALL_POSTS, payload: { posts: response } });
    });
};

export const createPost = () => dispatch => {
  makeRequest(
    {
      method: "POST",
      hook: "posts"
    },
    dispatch,
    res => {
      if (res.ok) {
        dispatch({
          type: SHOW_MODAL,
          payload: {
            showModal: true,
            modalMsg: "Su publicación ha sido creada",
            operationSuccess: true
          }
        });
      }
    }
  );
};

export const updatePost = id => dispatch => {
  makeRequest(
    {
      method: "PUT",
      hook: `posts/${id}`
    },
    dispatch,
    res => {
      if (res.ok) {
        dispatch({
          type: SHOW_MODAL,
          payload: {
            showModal: true,
            modalMsg: "Su publicación ha sido actualizada",
            operationSuccess: true
          }
        });
      }
    }
  );
};

export const deletePost = id => dispatch => {
  makeRequest(
    {
      method: "DELETE",
      hook: `posts/${id}`
    },
    dispatch,
    res => {
      if (res.ok) {
        dispatch({
          type: SHOW_MODAL,
          payload: {
            showModal: true,
            modalMsg: "Su publicación ha sido eliminada",
            operationSuccess: true
          }
        });
      }
    }
  );
};

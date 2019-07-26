import { GET_ALL_POSTS, CLOSE_MODAL, SHOW_MODAL } from "../constants";

const initialState = {
  posts: [],
  showModal: false,
  modalMsg: "",
  operationSuccess: true
};

const postsReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, ...payload };
    case CLOSE_MODAL:
      return { ...state, ...payload };
    case SHOW_MODAL:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default postsReducer;

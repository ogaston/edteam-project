import {
  getPosts,
  updatePost,
  deletePost,
  createPost,
  closeModal
} from "./actions/index";

export const mapStateToProps = state => {
  return {
    posts: state.posts,
    showModal: state.showModal,
    modalMsg: state.modalMsg,
    operationSuccess: state.operationSuccess
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onGetPosts: () => dispatch(getPosts()),
    onCreatePost: () => dispatch(createPost()),
    onUpdatePost: id => dispatch(updatePost(id)),
    onDeletePost: id => dispatch(deletePost(id)),
    onCloseModal: () => dispatch(closeModal())
  };
};

import React from "react";
import ReactModal from "react-modal";
import PropType from "prop-types";

const contentStyle = {
  width: "25%",
  margin: "auto",
  display: "flex",
  borderRadius: "5px",
  borderColor: "#dddddd",
  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
  flexDirection: "column",
  alignItems: "center",
  height: "25%",
  minHeight: "150px"
};

const Modal = ({ children, showModal }) => {
  return (
    <ReactModal
      isOpen={showModal}
      ariaHideApp={false}
      style={{ content: contentStyle }}
    >
      {children}
    </ReactModal>
  );
};

Modal.propTypes = {
  showModal: PropType.bool.isRequired,
  children: PropType.any.isRequired
};

export default Modal;

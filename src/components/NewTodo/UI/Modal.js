import React from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

const ModalContent = (props) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop} />
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>
          {props.title}
          <i
            onClick={props.onCloseModal}
            className={`${styles.close} bx bx-x`}
            title="close"
          ></i>
        </h2>
        <div className={styles.modalBody}>
          <div className={styles.modalText}>{props.children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

const modalLocation = document.getElementById("modal");

const Modal = (props) => {
  return createPortal(
    <ModalContent onCloseModal={props.onCloseModal} title={props.title}>
      {props.children}
    </ModalContent>,
    modalLocation
  );
};

export default Modal;

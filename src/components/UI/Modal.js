import React from "react";
import classes from "./Modal.module.css";
import Button from "./Button";

const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.closeModalHandler}></div>
      <div className={classes.modal}>
        <h2 className={classes.h2}>{props.title}</h2>
        <p className={classes.modalText}>{props.text}</p>
        <div className={classes.closeModal}>
          <Button bg="blueviolet" onClick={props.closeModalHandler}>
            Okay
          </Button>
        </div>
      </div>
    </>
  );
};

export default Modal;

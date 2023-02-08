import React, { useContext, useRef, useState } from "react";
import { TodoContext } from "./context/TodoProvider";
import styles from "./NewTodoHeader.module.css";
import uuid from "react-uuid";
import ModalForm from "./UI/ModalForm";

const NewTodoHeader = () => {
  const [openModal, setOpenModal] = useState(false);
  const todoTitleRef = useRef();
  const todoStatusRef = useRef();
  const { addTask } = useContext(TodoContext);

  const handleOpenModal = () => {
    setOpenModal((prevState) => !prevState);
  };
  const handleCloseModal = () => {
    setOpenModal((prevState) => !prevState);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: uuid(),
      taskName: todoTitleRef.current.value,
      taskStatus: todoStatusRef.current.value,
    };
    addTask(task);
    todoTitleRef.current.value = "";
    todoStatusRef.current.value = "Incomplete";
    setOpenModal(false);
  };
  return (
    <div className={styles.NewTodoHeader}>
      <button onClick={handleOpenModal} className={styles.button}>
        Add Task
      </button>
      <select className={styles.select} name="" id="">
        <option value="All">All</option>
        <option value="Complete">Complete</option>
        <option value="Incomplete">Incomplete</option>
      </select>
      {openModal && (
        <ModalForm
          todoTitleRef={todoTitleRef}
          todoStatusRef={todoStatusRef}
          title="Add Todo"
          onCloseModal={handleCloseModal}
          handleFormSubmit={handleFormSubmit}
          handleCloseModal={handleCloseModal}
          btnText="Add Task"
        />
      )}
    </div>
  );
};

export default NewTodoHeader;

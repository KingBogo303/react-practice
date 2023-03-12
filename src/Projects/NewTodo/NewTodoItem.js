import React, { useContext, useEffect, useState, useRef } from "react";
import { TodoContext } from "./context/TodoProvider";
import styles from "./NewTodoItem.module.css";
import ModalForm from "./UI/ModalForm";

const NewTodoItem = ({ task }) => {
  const [check, setCheck] = useState(false);

  const { deleteTask, setStatus } = useContext(TodoContext);

  const [openModal, setOpenModal] = useState(false);
  const todoTitleRef = useRef(task.taskName);
  const todoStatusRef = useRef(task.Status);
  const { updateTask } = useContext(TodoContext);

  const handleOpenModal = () => {
    setOpenModal((prevState) => !prevState);
  };
  const handleCloseModal = () => {
    setOpenModal((prevState) => !prevState);
  };

  const handleRemove = () => {
    deleteTask(task.id);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const taskItem = {
      id: task.id,
      taskName: todoTitleRef.current.value,
      taskStatus: todoStatusRef.current.value,
    };
    updateTask(taskItem);
    todoTitleRef.current.value = "";
    todoStatusRef.current.value = "Incomplete";
    setOpenModal(false);
  };
  useEffect(() => {
    task.taskStatus === "Complete" ? setCheck(true) : setCheck(false);
  }, [task.taskStatus]);

  // changing check to string
  const checkToString = check ? "Incomplete" : "Complete";

  const updateCheckValue = () => {
    setCheck((prevState) => !prevState);
    setStatus(task.id, checkToString);
  };
  return (
    <React.Fragment>
      <div className={`${styles.newTodoItem} ${check && styles.taskCompleted}`}>
        <div className={styles.leftItems}>
          <input
            value={check}
            onChange={updateCheckValue}
            checked={check}
            type="checkbox"
            className={styles.checkbox}
          />
          <h4 key={task.id} className={`${styles.h4} `}>
            {task.taskName}
          </h4>
        </div>
        <div className={styles.rightItems}>
          <i onClick={handleRemove} className="bx bxs-trash-alt"></i>
          <i onClick={handleOpenModal} className="bx bxs-edit-alt"></i>
        </div>
      </div>
      {openModal && (
        <ModalForm
          todoTitleRef={todoTitleRef}
          todoStatusRef={todoStatusRef}
          title="Update Todo"
          onCloseModal={handleCloseModal}
          handleFormSubmit={handleFormSubmit}
          handleCloseModal={handleCloseModal}
          btnText="Update Task"
        />
      )}
    </React.Fragment>
  );
};

export default NewTodoItem;

import React from "react";
import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";

const TodoItems = (props) => {
  return (
    <div className={styles.TodoItems}>
      <TodoItem
        deleteHandler={props.deleteHandler}
        completeTask={props.completeTask}
        tasks={props.tasks}
      />
    </div>
  );
};

export default TodoItems;

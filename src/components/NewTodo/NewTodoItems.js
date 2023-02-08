import React, { useContext } from "react";
import { TodoContext } from "./context/TodoProvider";
import NewTodoItem from "./NewTodoItem";
import styles from "./NewTodoItems.module.css";

const NewTodoItems = () => {
  const TodoCtx = useContext(TodoContext);
  const items = TodoCtx.tasks;
  return (
    <div className={styles.NewTodoItems}>
      {items.length > 0 ? (
        items.map((task) => <NewTodoItem key={task.id} task={task} />)
      ) : (
        <h4 className={styles.h4}>No Tasks</h4>
      )}
    </div>
  );
};

export default NewTodoItems;

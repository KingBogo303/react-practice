import React from "react";
import NewTodoHeader from "./NewTodoHeader";
import styles from "./IndexTodo.module.css";
import NewTodoItems from "./NewTodoItems";
import TodoProvider from "./context/TodoProvider";

const IndexTodo = () => {
  return (
    <TodoProvider>
      <div className={styles.IndexTodo}>
        <h2 className={styles.h2}>TODO LIST</h2>
        <NewTodoHeader />
        <NewTodoItems />
      </div>
    </TodoProvider>
  );
};

export default IndexTodo;

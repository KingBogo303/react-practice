import React from "react";
import styles from "./Todo.module.css";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";

const Todo = (props) => {
  return (
    <div className={styles.Todo}>
      <div className={styles.container}>
        <AddTodo AddTask={props.AddTaskHandler} />
        <TodoItems
          deleteHandler={props.deleteHandler}
          completeTask={props.completeTask}
          tasks={props.tasks}
        />
      </div>
    </div>
  );
};

export default Todo;

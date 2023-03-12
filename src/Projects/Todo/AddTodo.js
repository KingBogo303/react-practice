import React, { useState } from "react";
import styles from "./AddTodo.module.css";

const AddTodo = (props) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);

  const AddTaskHandler = (event) => {
    event.preventDefault();
    if (todo.trim().length <= 2) {
      setError(true);

      return;
    }
    const newTask = { id: Math.random(), title: todo, completed: false };
    props.AddTask(newTask);
    setTodo("");
  };

  const todoUpdHandler = (event) => {
    if (event.target.value.trim().length > 2) {
      setError(false);
    }
    setTodo(event.target.value);
  };
  return (
    <div className={`${styles.AddTodo} ${error && styles.error}`}>
      <form action="" onSubmit={AddTaskHandler}>
        <h2>Todo Goal</h2>
        {error ? (
          <p className={styles.errorMsg}> Enter min 3 characters</p>
        ) : (
          <p></p>
        )}
        <input
          type="text"
          value={todo}
          autoFocus
          onChange={todoUpdHandler}
          placeholder="Enter Task"
        />

        <button type="submit">Add Todo!</button>
      </form>
    </div>
  );
};

export default AddTodo;

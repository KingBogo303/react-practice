import React, { useState } from "react";
import Todo from "./Todo";

const INITIAL_TASKS = [
  // { title: "Wash the dishes", id: Math.random(), completed: false },
  // { title: "Learn React", id: Math.random(), completed: false },
];

function TodoComponent() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const AddTaskHandler = (task) => {
    setTasks((prevState) => {
      const updatedTask = prevState ? [...prevState] : [];
      updatedTask.unshift(task);
      return updatedTask;
    });
  };
  const deleteHandler = (taskId) => {
    setTasks((prevState) => {
      const updatedTask = prevState.filter((task) => task.id !== taskId);
      return updatedTask;
    });
  };
  const completeTask = (taskId) => {
    setTasks((prevState) => {
      const updTask = prevState.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      return updTask;
    });
  };
  return (
    <div className="TodoComponent">
      <p>Double click to complete a task</p>
      <Todo
        completeTask={completeTask}
        deleteHandler={deleteHandler}
        tasks={tasks}
        AddTaskHandler={AddTaskHandler}
      />
    </div>
  );
}

export default TodoComponent;

import React, { createContext, useReducer } from "react";
// import TodoContext from "./TodoContext";
// const initialState = [
//   {
//     id: Math.random(),
//     taskName: "Fly to the moon",
//     completed: false,
//   },
//   {
//     id: Math.random(),
//     taskName: "Find the girl of your dreams",
//     completed: false,
//   },
// ];
// localStorage.setItem("todo", initialState);

const getInitialTodoList = () => {
  const localTodoList = localStorage.getItem("todo");
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  localStorage.setItem("todo", []);
  return [];
};

export const TodoContext = createContext();

const TodoReducer = (state, action) => {
  if (action.type === "ADD") {
    const initialTasks = localStorage.getItem("todo");
    if (initialTasks) {
      const todoListArr = JSON.parse(initialTasks);
      todoListArr.push(action.item);
      const newArr = JSON.stringify(todoListArr);
      localStorage.setItem("todo", newArr);
      return todoListArr;
    } else {
      const todoListArr = [action.item];
      const newArr = JSON.stringify([action.item]);
      localStorage.setItem("todo", newArr);
      return todoListArr;
    }
  }
  if (action.type === "DELETE") {
    const initialTasks = localStorage.getItem("todo");
    const todoListArr = JSON.parse(initialTasks);
    const newArr = todoListArr.filter((task) => task.id !== action.id);
    const stringArr = JSON.stringify(newArr);
    localStorage.setItem("todo", stringArr);
    return newArr;
  }
  if (action.type === "UPDATE") {
    const initialTasks = localStorage.getItem("todo");
    const todoListArr = JSON.parse(initialTasks);

    todoListArr.forEach((task) => {
      if (task.id === action.newItem.id) {
        task.taskName = action.newItem.taskName;
        task.taskStatus = action.newItem.taskStatus;
      }
    });
    const stringArr = JSON.stringify(todoListArr);
    localStorage.setItem("todo", stringArr);
    return todoListArr;
  }
  if (action.type === "STATUS") {
    const initialTasks = localStorage.getItem("todo");
    const todoListArr = JSON.parse(initialTasks);

    todoListArr.forEach((task) => {
      if (task.id === action.id) {
        task.taskStatus = action.taskStatus;
      }
    });
    const stringArr = JSON.stringify(todoListArr);
    localStorage.setItem("todo", stringArr);
    return todoListArr;
  }
  return state;
};

const TodoProvider = (props) => {
  const [todoItems, dispatchTodoAction] = useReducer(
    TodoReducer,
    getInitialTodoList()
  );
  const addTask = (item) => {
    dispatchTodoAction({ type: "ADD", item });
  };
  const deleteTask = (id) => {
    dispatchTodoAction({ type: "DELETE", id });
  };
  const updateTask = (newItem) => {
    dispatchTodoAction({ type: "UPDATE", newItem });
  };
  const setStatus = (id, taskStatus) => {
    dispatchTodoAction({ type: "STATUS", id, taskStatus });
  };

  const todoContext = {
    tasks: todoItems,
    addTask,
    deleteTask,
    updateTask,
    setStatus,
  };
  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

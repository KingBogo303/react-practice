import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoComponent from "./components/Todo/TodoComponent";
import UserComponent from "./components/User/UserComponent";
import IndexTodo from "./components/NewTodo/IndexTodo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route element={<App />} path="/" />
      <Route element={<TodoComponent />} path="/todo" />
      <Route element={<UserComponent />} path="/user" />
      <Route element={<IndexTodo />} path="/newTodo" />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

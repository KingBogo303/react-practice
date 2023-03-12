import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="AppContent">
        <div>
          <Link to="./todo">Todo</Link>
        </div>
        <div>
          <Link to="./user">User</Link>
        </div>
        <div>
          <Link to="./newTodo">NewTodo</Link>
        </div>
        <div>
          <Link to="./loginForm">Login Form</Link>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

import classes from "./AddUser.module.css";
import Button from "../UI/Button";

import Card from "../UI/Card";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const updateUsername = (event) => {
    setUsername(event.target.value);
  };
  const updateAge = (event) => {
    setAge(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        text: "Please enter a name and age (no non-empty values).",
      });
      return;
    }
    if (age < 0) {
      setError({
        title: "Invalid input",
        text: "Please enter a valid age (age > 0) ",
      });
      return;
    }
    const newUser = { name: username, age, id: Math.random() };
    props.AddUserHandler(newUser);

    setUsername("");
    setAge("");
  };
  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Modal
          closeModalHandler={closeModalHandler}
          title={error.title}
          text={error.text}
        />
      )}
      <Card>
        <div className={classes.AddUser}>
          <form onSubmit={submitFormHandler} className={classes.form}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={username}
              onChange={updateUsername}
              id="username"
            />
            <label htmlFor="age">Age (Years)</label>
            <input type="number" value={age} onChange={updateAge} id="age" />
            <div className={classes.actions}>
              <Button type="submit" bg="blueviolet">
                Add User
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </>
  );
};

export default AddUser;

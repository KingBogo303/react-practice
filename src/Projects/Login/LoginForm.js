import React, { useState } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setFormValues({})
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className={styles.LoginForm}>
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <form className={styles.form}>
        <h2 className={styles.head}>Login Form</h2>
        <div className={styles.box}>
          <label htmlFor="username">Username</label>
          <input
            value={formValues.username}
            onChange={handleChange}
            type="username"
            id="username"
            name="username"
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="email">Email</label>
          <input
            value={formValues.email}
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="password">Password</label>
          <input
            value={formValues.password}
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className={styles.btn_bx}>
          <button type="reset"></button>
          <button type="submit"></button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

import React, { useState } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [IsSubmit, setIsSubmit] = useState(false);

  const handleReset = () => {
    setFormValues(initialValues);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0) {
      setIsSubmit(true);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Enter a Username";
    }
    if (!values.email) {
      errors.email = "Enter an Email";
    } else if (!regex.test(values.email)) {
      errors.email = "Enter a valid Email";
    }
    if (!values.password) {
      errors.password = "Enter a Password";
    } else if (values.password.length < 3) {
      errors.password = "Password must be more than 3 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password must be less than 10 characters";
    }
    console.log(errors);
    return errors;
  };

  return (
    <div className={styles.LoginForm}>
      {IsSubmit ? (
        <p className={`${styles.success} ${styles.view}`}>
          Submission Successful
        </p>
      ) : (
        <pre className={styles.view}>
          {JSON.stringify(formValues, undefined, 2)}
        </pre>
      )}
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
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
          <button onClick={handleReset}>Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

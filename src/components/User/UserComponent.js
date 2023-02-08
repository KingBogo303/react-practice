import React, { useState } from "react";
import classes from "./UserComponent.module.css";
import AddUser from "./AddUser";
import UserList from "./UserList";
const UserComponent = () => {
  const [users, setUsers] = useState([]);
  const AddUserHandler = (newUser) => {
    setUsers((prevState) => {
      const users = [...prevState];
      users.unshift(newUser);
      return users;
    });

    // setUsers(prevState=>{
    //     const users = [...prevState]
    // })
  };

  return (
    <div className={classes.UserComponent}>
      {/* <div> */}
      <AddUser AddUserHandler={AddUserHandler} />
      <UserList users={users} />
      {/* </div> */}
    </div>
  );
};

export default UserComponent;

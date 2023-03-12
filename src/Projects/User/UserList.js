import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div>
      <Card>
        <div className={classes.UserList}>
          {props.users.length !== 0 ? (
            props.users.map((user) => (
              <h3 key={user.id}>{`${user.name} (${user.age} years old)`}</h3>
            ))
          ) : (
            <p className={classes.UserListText}>No Users to display</p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default UserList;

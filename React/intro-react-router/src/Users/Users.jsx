import React from "react";
import { useLoaderData } from "react-router";
import User from "../components/User/User";

const Users = () => {
  const users = useLoaderData();
  // console.log(users);
  return (
    <div>
      <p>This is a User page.</p>
      {
        users.map(user => <User key={user.id} user ={user}></User>)
      }
    </div>
  );
};

export default Users;

import React, { use } from "react";
import User from "./User";

const Users = ({ usersPromise }) => {
  console.log(usersPromise);
  const users = use(usersPromise);

  return (
    <div>
      <h2>users Data fetched form JSON placeholder.</h2>
      <p>{users.length}</p>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};

export default Users;

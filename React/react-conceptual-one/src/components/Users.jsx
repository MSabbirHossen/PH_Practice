const Users = ({ users }) => {
  return (
    <>
      <h1>Users headings are here</h1>
      <p>your id name {users.name} </p>
      <p>your id is {users.id} </p>
      <p>your place is {users.place}</p>
      {users.isStudent ? <h1>YES</h1> : <h1>No</h1>}
    </>
  );
};

export default Users;

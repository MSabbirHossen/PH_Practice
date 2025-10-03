const User = ({ user }) => {
  console.log(user);
  const { name, email, phone, website } = user;

  return (
    <div className="card">
      <h2>Name: {name}</h2>
      <h6>Email: {email}</h6>
      <h6>Phone: {phone}</h6>
      <a href="">{website}</a>
    </div>
  );
};

export default User;

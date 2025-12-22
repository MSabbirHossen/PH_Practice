const Event = () => {
  const handleLogin = (value) => {
    console.log("login Btn Clicked.");
  };
  return (
    <>
      <button onClick={() => handleLogin(2)}>Login</button>
    </>
  );
};

export default Event;

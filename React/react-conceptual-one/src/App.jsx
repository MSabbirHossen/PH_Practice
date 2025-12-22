// import Counter from "./components/Counter";
// import Event from "./components/Event";
import Fetch from "./components/Fetch";
// import Users from "./components/Users";
// import Varsity from "./components/Varsity";

const App = () => {
  const person = {
    name: "Sabbir",
    id: 1,
    place: "BD",
    isStudent: false,
  };

  const varsity = {
    name: "IUM",
    place: "KSA",
    rank: 1200,
  };
  return (
    <>
      <h2>Hello {person.name}</h2>
      {/* <Users users={person}></Users>
      <Varsity varsity={varsity}></Varsity>
      <Event></Event>
      <Counter></Counter> */}
      <Fetch></Fetch>
    </>
  );
};

export default App;

// import { Suspense, use } from "react";
import UsersCopy from "./UsersCopy";
// import Spinner from "./Spinner";

const Fetch = () => {
  const url = "GET https://fake-json-api.mock.beeceptor.com/users";
  const UserPromise = fetch(url).then((res) => {
    return res.json();
  });
  // const UserPromise = { UserPromise };
  console.log(UserPromise);
  // use(UserPromise);

  return (
    <>
      <h1 className="text-xl capitalize font-bold">Fetch connected.</h1>
      <UsersCopy usersCopy={UserPromise}></UsersCopy>
      {/* <Suspense fallback={<Spinner></Spinner>}>
      </Suspense> */}
    </>
  );
};

export default Fetch;

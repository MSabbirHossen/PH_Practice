import { Suspense } from "react";
import "./App.css";
import Fetch from "./components/Fetch";
import Users from "./components/Users";
import Friends from "./components/Friends";
import Posts from "./components/Posts";

const postsUrl = "https://jsonplaceholder.typicode.com/posts";
const fetchPost = async () => {
  const res = await fetch(postsUrl);
  return res.json();
};

const apiUrl = "https://jsonplaceholder.typicode.com/users";
const apiPromise = fetch(apiUrl).then((res) => res.json());

const usersUrl = "https://jsonplaceholder.typicode.com/users";
const usersPromise = fetch(usersUrl).then((res) => res.json());

const dataUrl = "https://jsonplaceholder.typicode.com/users";
const fetchData = async () => {
  const res = await fetch(dataUrl);
  return res.json();
};

function App() {
  const dataPromise = fetchData();
  const postsPromise = fetchPost();
  return (
    <>
      <Suspense fallback={"Data is Loading..."}>
        <Posts postsPromise={postsPromise}></Posts>
        <Friends dataPromise={dataPromise}></Friends>
        <Fetch apiPromise={apiPromise}></Fetch>
        <Users usersPromise={usersPromise}></Users>
      </Suspense>
    </>
  );
}

export default App;

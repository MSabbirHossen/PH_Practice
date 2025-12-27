import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Laptops from "./components/Laptops/Laptops.jsx";
import Users from "./Users/Users.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx"
import Posts from "./components/Posts/Posts.jsx"
import PostDetails from "./components/PostDetails/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "mobiles",
        Component: Mobiles,
      },
      {
        path: "laptops",
        Component: Laptops,
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users/:userId",
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      // console.log("🚀 ~ params:", params.userId)},
        Component: UserDetails
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts
      },
      {
        path: "posts/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      },
      {
        path: "*",
        element: <div> <h1> 404: Not found.</h1></div>
      }
    ],
  },
  {
    path: "/about",
    element: <p>About us</p>,
  },
  {
    path: "/blog",
    element: <p>the blog post will be here</p>,
  },
  {
    path: "/old-app",
    Component: App,
  },
  {
    path: "*",
    element: <div> 
      <h1>Page Not found</h1>
    <h4>404 status</h4></div>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

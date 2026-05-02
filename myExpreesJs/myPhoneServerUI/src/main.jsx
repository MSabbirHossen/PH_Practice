import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Phones from "./Components/Phones.jsx";
import Phone from "./Components/Phone.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "phones",
        element: <Phones />,
        loader: () => fetch("http://localhost:3000/phones"),
      },
      {
        path: "phones/:id",
        element: <Phone />,
        loader: ({ params }) => fetch(`http://localhost:3000/phones/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

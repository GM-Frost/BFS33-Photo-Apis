import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home.jsx";
import Posts from "./pages/posts";
import Albums from "./pages/albums";
import Todos from "./pages/todos";
import Users from "./pages/users";
import Photos from "./pages/photos";
import Comments from "./pages/comments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/comments",
    element: <Comments />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/albums",
    element: <Albums />,
  },
  {
    path: "/todos",
    element: <Todos />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/photos",
    element: <Photos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

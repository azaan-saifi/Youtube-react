import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChannelDetail, Feed, SearchDetail, VideoDetail } from './components'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/video/:id",
        element: <VideoDetail />,
      },
      {
        path: "/channel/:id",
        element: <ChannelDetail />,
      },
      {
        path: "/search/:searchTerm",
        element: <SearchDetail />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

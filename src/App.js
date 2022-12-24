import './App.css';
import React from 'react';
import History from '../src/components/History';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Address from '../src/components/Address';

const router = createBrowserRouter([
  {
    path: "/",
    element: <History />,
  },
  {
    path: "/history/:page",
    element: <History />,
  },
  {
    path: "/address",
    element: <Address />,
  },
]);

export default function App() {

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

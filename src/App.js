import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SystemType from "./pages/SystemType";
import PureComputing from "./pages/PureComputing";
import { ConfigProvider } from "./contexts/ConfigContext";

import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SystemType />,
  },
  {
    path: "/purecomputing",
    element: <PureComputing />,
  },
]);

function App() {
  return (
    <ConfigProvider>
      <div className="App-outer font-montserrat">
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;

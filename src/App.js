import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SystemType from "./pages/SystemType";
import PureComputing from "./pages/PureComputing";
import HybridComputing from "./pages/HybridComputing";
import EdgeComputing from "./pages/EdgeComputing";

import { ConfigProvider } from "./contexts/ConfigContext";

import React from "react";
import NavBar from "./components/NavBar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <SystemType />,
  },
  {
    path: "/purecomputing",
    element: <PureComputing />,

  },
  {
    path: "/hybridcomputing",
    element: <HybridComputing />,

  },
  {
    path: "/edgecomputing",
    element: <EdgeComputing />,

  },
  
]);

function App() {
  return (
    <ConfigProvider>
      <div className="App-outer font-montserrat">
          <div className="justify-self-start w-full">
            <NavBar/>
          </div>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
